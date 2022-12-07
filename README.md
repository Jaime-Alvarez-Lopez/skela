# Skela

This package provides a simple, statefull library with 0 dependencies for developers to create user interfaces with.

```javascript
import { Container, H1, Text } from "@jaime-alvarez/skela";

const myComponent = Container(
  {
    id: "main",
  },
  [H1({ className: "world" }, Text("Hello, World!"))]
);

myComponent.paint();
// Paint can receive an HTMLElement or a Node as argument
//  Calling paint with no argument will mount on document.body
// NOTE: painting a node into another one won't make this node a direct child of it.
```

Results into this:

```html
<div id="main">
  <h1 class="world">Hello, World!</h1>
</div>
```

A simple component that fetches from an API:

```javascript
import { Container, H1, Button, Text, createState } from "@jaime-alvarez/skela";

const API_URL = "https://catfact.ninja/fact";

function Component() {
  const [data, setData, dataSubscription] = createState("", true);
  const [isLoading, setIsLoading, loadSubscription] = createState(false, true);

  const req = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API_URL);
      const _json = await res.json();
      setData(_json.fact);
    } catch (e) {
      setData("Unable to get a response.");
    } finally {
      setIsLoading(false);
    }
  };

  return Container(
    {
      subscriptions: [dataSubscription, loadSubscription],
      onmount: req,
    },
    [
      Container(
        {
          style: "padding: 10px;",
        },
        [
          H1(
            {
              className: "cat-fact",
            },
            Text(() => data())
          ),
        ]
      ),
      Container(
        {
          style: "padding: 10px;",
        },
        [
          Button(
            () => (isLoading() ? { disabled: "" } : { onclick: req }),
            [Text("Fetch new")]
          ),
        ]
      ),
    ]
  );
}

Component().paint();
```

Results into:

```html
<div>
  <div style="padding: 10px;">
    <h1 class="cat-fact">
      A cat almost never meows at another cat, mostly just humans. Cats
      typically will spit, purr, and hiss at other cats.
    </h1>
  </div>
  <div style="padding: 10px;">
    <button>Fetch new</button>
  </div>
</div>
```

Mounting and unmounting components:

```javascript
import {
  Container,
  H1,
  Text,
  Tree,
  createState,
  createKey,
  $NO_PROPS,
} from "@jaime-alvarez/skela";

function MountAndUnmountComponent() {
  const [mounted, setMounted, mountedSub] = createState(true, true);

  const myComponentKey = createKey();
  //  This key can only be used in one Node

  return Container({ id: "main", subscriptions: [mountedSub] }, [
    H1(
      {
        key: myComponentKey,
      },
      [Text("Hello,")]
    ),
    H1($NO_PROPS, Text("World!")),
    Button(
      {
        onclick: () => {
          //  Get the node using the key
          const t = Tree.getNode(myComponentKey);
          if (mounted()) {
            t.unpaint();
            setMounted(false);
          } else {
            t.paint();
            setMounted(true);
          }
        },
      },
      [Text(() => (mounted() ? "Unmount" : "Mount"))]
    ),
  ]);
}

MountAndUnmountComponent().paint();
```

Results into:

```html
<div id="main">
  <h1>Hello,</h1>
  <h1>World!</h1>
  <button>Unmount</button>
</div>
```

After first button click:

```html
<div id="main">
  <h1>World!</h1>
  <button>Unmount</button>
</div>
```

After second button click:

```html
<div id="main">
  <h1>Hello,</h1>
  <h1>World!</h1>
  <button>Unmount</button>
</div>
```

Reactive child:

```javascript
import { Container, H1, Text, createState } from "@jaime-alvarez/skela";

const [users, getUsers, usersSubs] = createState([], true);

const req = async function () {
  /** Some req that will change state */
};

const myComponent = Container({ subscriptions: [usersSubs] }, () =>
  users().map((u) => H1({}, [Text(u.name)]))
);
```
