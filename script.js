let riveInstance, sizeInput;

function updateRiveInput() {
    if (!sizeInput) return;

    const maxWidth = 3150;
    const browserWidth = window.innerWidth;
    
    let scaledValue = (browserWidth / maxWidth) * 100;
    scaledValue = Math.max(10, Math.min(100, scaledValue));

    sizeInput.value = scaledValue;
}

document.addEventListener("DOMContentLoaded", () => {
    riveInstance = new rive.Rive({
        src: "catFIX.riv",
        canvas: document.getElementById("riveCanvas"),
        autoplay: true,
        artboard: "Main",
        stateMachines: "State Machine 1",
        onLoad: () => {
            const inputs = riveInstance.stateMachineInputs("State Machine 1");
            sizeInput = inputs.find((i) => i.name === "SizeScreen");
            riveInstance.resizeDrawingSurfaceToCanvas();
            
            updateRiveInput();
            window.addEventListener("resize", updateRiveInput);
        }
    });
});
