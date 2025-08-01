import React from 'react';

export const CustomGeometry = () => {
   const vertices = new Float32Array([
    // Base - two triangles
    -1, 0, -1,
     1, 0, -1,
     1, 0,  1,

    -1, 0, -1,
     1, 0,  1,
    -1, 0,  1,

    // Side 1
    -1, 0, -1,
     1, 0, -1,
     0, 1,  0,

    // Side 2
     1, 0, -1,
     1, 0,  1,
     0, 1,  0,

    // Side 3
     1, 0,  1,
    -1, 0,  1,
     0, 1,  0,

    // Side 4
    -1, 0,  1,
    -1, 0, -1,
     0, 1,  0,
  ]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[vertices, 3]}
          itemSize={3}
          count={vertices.length / 3}
        />
      </bufferGeometry>
       <meshStandardMaterial color="gold" side={2}/>
       <ambientLight intensity={0.5} />
    </mesh>
  );
};


// Creating a custom geometry
// 1. Define vertices using Float32Array
// 2. Use bufferGeometry to create a mesh
// 3. Use bufferAttribute to attach vertices to the geometry
// 4. Use meshBasicMaterial to apply color and side properties
// 5. Render the mesh in the scene
// 6. Use side={2} to render both sides of the geometry
// 7. Ensure the mesh is visible in the scene with appropriate camera and lighting settings