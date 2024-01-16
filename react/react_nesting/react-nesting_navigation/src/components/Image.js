export default function Image({ src, alt }) {
  return <img className="round-image" src={src} alt={alt}></img>;
}

// ### 4. Image component

// Task: Create an `Image` component to render `<img>` tags.

// > 💡 This will be a helper component to create a `Logo` and `Avatar` component.

// - The `Image` component returns an `<img>` element with `className="round-image"` and
// - receives the props `src` and `alt` and passes them to the `src` and `alt` attributes.
// - as we don't need children here, this component should not have a `children` prop

// ### 5. Logo and Avatar component

// Task: Create a `Logo` and `Avatar` component, respectively.

// - Use the same JSX as in the `App.js` as basis (copy the tags including `<a>` or `<button>` tag and their children)
//   - import the `Image` component and use it.
//   - make sure to import the correct `jpg` file.
// - In the `App.js` file, import the `Logo` and `Avatar` component and replace the relevant JSX to use them.
// - Check that the UI still looks the same.
