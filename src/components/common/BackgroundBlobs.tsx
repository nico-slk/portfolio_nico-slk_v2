import { useEffect, useState } from 'react';
import styles from './BackgroundBlobs.module.scss';

// Sub-componente para cada nube individual
const Blob = ({ className }: { className: string; }) => {
  // Estado para almacenar las coordenadas X e Y del desplazamiento aleatorio
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Función que genera nuevas coordenadas aleatorias
    const moveBlob = () => {
      // Math.random() * 200 - 100 genera un rango de -100 a 100 píxeles
      const x = Math.floor(Math.random() * 400) - 200;
      const y = Math.floor(Math.random() * 400) - 200;
      // Actualizamos el estado para disparar el re-renderizado y la transición CSS
      setPosition({ x, y });
    };

    // Ejecutamos una vez al montar para que no arranquen todos en (0,0)
    moveBlob();

    // Creamos un intervalo que cambia la posición cada 2.2 segundos
    const interval = setInterval(moveBlob, 5000);

    // Función de limpieza: detiene el intervalo si el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      // Combinamos la clase base del blob con la clase de posición específica (top, middle, etc.)
      className={`${styles.blob} ${className}`}
      // Aplicamos el movimiento mediante transform para que sea procesado por la GPU
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    />
  );
};

const BackgroundBlobs = () => {
  return (
    // Contenedor principal que abarca toda la página
    <div className={styles.container}>
      <Blob className={styles.topLeft} />
      <Blob className={styles.topRight} />
      <Blob className={styles.middleLeft} />
      <Blob className={styles.middleRight} />
      <Blob className={styles.middleBottomLeft} />
      <Blob className={styles.bottomLeft} />
    </div>
  );
};

export default BackgroundBlobs;
