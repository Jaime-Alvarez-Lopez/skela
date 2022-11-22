# Skela

This package provides an easy,fast and lightweight statefull library with 0 dependencies for developers to create user interfaces with.

```javascript
import { Container, H1, Text } from "@jaime-alvarez/skela";

const myComponent = Container(
  {
    id: "main",
  },
  H1({ className: "world" }, Text("Hello, World!"))
);

myComponent.paint();
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
    Container(
      {
        style: "padding: 10px;",
      },
      H1(
        {
          className: "cat-fact",
        },
        Text(() => data())
      )
    ),
    Container(
      {
        style: "padding: 10px;",
      },
      Button(
        () => (isLoading() ? { disabled: "" } : { onclick: req }),
        Text("Fetch new")
      )
    )
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
