import BpmnModeler from 'bpmn-js/lib/Modeler';
import { useEffect, useRef } from 'react';
export default function Modeler() {
  const containerRef = useRef();
  useEffect(() => {
    const modeler = new BpmnModeler({ container: containerRef.current });
    fetch('/simple-process.bpmn')
      .then(r => r.text())
      .then(xml => modeler.importXML(xml));
  }, []);

  return <div ref={containerRef} style={{ height: '500px', border: '1px solid #ccc' }} />;
}