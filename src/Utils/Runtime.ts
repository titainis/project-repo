  export const formatRuntime = (minutes: number | undefined): string => {
    if(!minutes || minutes <= 0) return "Runtime unknown";

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`
  }
