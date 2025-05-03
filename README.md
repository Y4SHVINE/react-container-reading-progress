# React Container Reading Progress

A lightweight React hook that tracks reading progress within a specific scrollable container element.

## Features

- 🔍 Tracks reading progress within any scrollable container
- 📊 Returns progress as a percentage (0-100)
- 🚀 Lightweight and performant
- 📦 Zero dependencies
- 🔧 TypeScript support

## Demo

Check out the [Demo](https://y4shvine.github.io/react-container-reading-progress/) to see it in action!

## Installation

```bash
npm install react-container-reading-progress
# or
yarn add react-container-reading-progress
```

## Usage

```tsx
import { useContainerReadingProgress } from 'react-container-reading-progress';

function MyComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const progress = useContainerReadingProgress(containerRef, contentRef);

  return (
    <div ref={containerRef} style={{ height: '500px', overflow: 'auto' }}>
      <div ref={contentRef}>
        {/* Your content here */}
      </div>
      <div>Reading Progress: {progress}%</div>
    </div>
  );
}
```

## API

### `useContainerReadingProgress(containerRef, contentRef)`

#### Parameters

- `containerRef`: A React ref object attached to the scrollable container element (the one with `overflow: auto/scroll`)
- `contentRef`: A React ref object attached to the content element inside the container

#### Returns

- A number between 0 and 100 representing the reading progress percentage

## License

MIT © [Yashvida Jayasekara](https://github.com/Y4SHVINE)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
