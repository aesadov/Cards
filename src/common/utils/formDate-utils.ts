
export const formDate = (date: string): string => {
    const newDate = new Date(date).getDate() < 10 ? '0' + new Date(date).getDate() : new Date(date).getDate()
    const newMonth = new Date(date).getMonth() < 10 ? '0' + new Date(date).getMonth() : new Date(date).getMonth()
    const newHours = new Date(date).getHours()
    const newMinutes = new Date(date).getMinutes()
    const newSeconds = new Date(date).getSeconds()
    return `${newDate}-${newMonth}-${new Date(date).getFullYear()}  ${newHours}:${newMinutes}:${newSeconds}`
}