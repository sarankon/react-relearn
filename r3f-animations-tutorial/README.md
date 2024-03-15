# r3f-animations-tutorial

create-vite@5.2.2
```
npm create vite@latest
```

https://www.youtube.com/watch?v=mdj7Z3PCxRg
React Three Fiber tutorial - How to animate 3D models

Project Name: r3f-animations-tutorial

```
cd r3f-animations-tutorial
npm install @react-three/fiber @react-three/drei

npm run dev
```

https://mantine.dev/
```
npm install @mantine/core @mantine/hooks
```

Create JSX file with gltfjsx
```
npx gltfjsx public/models/animated_character_v1.2.glb
```
Then edit jsx file
1. component name

export default function [component_name](props) { }
export default function Character(props) { }

2. resource path at useGLTF() method

Path: /public/models/animated_character_v1.2.glb
useGLTF('./models/animated_character_v1.2.glb')
useGLTF.preload('./models/animated_character_v1.2.glb')

Contexts ???