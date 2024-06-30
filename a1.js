function DDA(x0, y0, x1, y1) {
    let points = [];
    
    const dx = x1 - x0;
    const dy = y1 - y0;
    const steps = Math.max(Math.abs(dx), Math.abs(dy));
    
    const xIncrement = dx / steps;
    const yIncrement = dy / steps;
    
    let x = x0;
    let y = y0;
    
    for (let i = 0; i <= steps; i++) {
        points.push([x, y]);
        x += xIncrement;
        y += yIncrement;
    }
    
    return points;
}

// Example usage
const x0 = 0;
const y0 = 0;
const x1 = 5;
const y1 = 3;

const linePoints = DDA(x0, y0, x1, y1);
console.log(linePoints);
