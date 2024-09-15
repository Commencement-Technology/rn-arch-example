export const formatTime = (timestamp: number | undefined) =>
    timestamp === undefined ? 'Error' : new Date(timestamp).toLocaleString()