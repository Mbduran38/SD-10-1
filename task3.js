export function ageCalculator(year,month,day) {
    year = Number(year);
    month = Number(month);
    day = Number(day);

    const today = new Date();
    const birthDate = new Date(year, month , day);

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthCal = today.getMonth() - birthDate.getMonth();

    if (monthCal < 0 || (monthCal === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    console.log(age);
    return age;
}