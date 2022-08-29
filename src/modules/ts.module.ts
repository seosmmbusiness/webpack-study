// TypeScript 
const field:String = 'Hello from Type Script Module'

interface consoleMessage {
    field:String
}

const cm:consoleMessage = {
    field
}

console.log("[TypeScript]:", cm.field)