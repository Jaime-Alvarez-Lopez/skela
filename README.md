# Skela

This package provides an easy,fast and lightweight statefull framework with no dependencies for developers to create user interfaces with.

Create your first component:

```javascript
import { Container, H1,$RENDER, $NO_PROPS, Text } from "@jaime-alvarez/skela";

const myComponent = Container(
  {
    id: "main",
  },
  H1($NO_PROPS, Text("Hello, World!"));

myComponent.access($RENDER)()
);
```

Results into this:

```html
<body>
  <div id="main">
    <h1>Hello, World!</h1>
  </div>
</body>
```

A simple component that fetches from an API:

```javascript
import {
  $NO_PROPS,
  $RENDER,
  Container,
  H1,
  Button,
  Text,
  createState,
} from "@jaime-alvarez/skela";

const URL = "https://catfact.ninja/fact";

function Component() {
  const [data, setData, dataSub] = createState("", true);
  const [isLoading, setIsLoading, loadSub] = createState(false, true);

  const req = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(URL);
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
      subscriptions: [dataSub, loadSub],
    },
    H1(
      {
        onmount: req,
      },
      Text(() => data())
    ),
    Button(
      () => (isLoading() ? { disabled: "" } : { onclick: req }),
      Text("Fetch new")
    )
  );
}

Component().access($RENDER)();
```

Results into:

```html
<body>
  <div>
    <h1>
      When a domestic cat goes after mice, about 1 pounce in 3 results in a
      catch.
    </h1>
    <button>Fetch new</button>
  </div>
</body>
```
