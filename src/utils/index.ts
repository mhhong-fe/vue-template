export function centToYuan(centValue: number | string | undefined) {
    if (centValue === undefined)
        return '0';
    let numValue = centValue as number;
    if (typeof centValue === 'string') {
        numValue = Number.parseFloat(centValue);
    }
    // 预防出现小数位数过多的情况，加上maximumFractionDigits
    return (numValue / 100).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}
