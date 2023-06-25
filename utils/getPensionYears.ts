const lastPensionYear = 1990

export function getPensionYears(age:number) {
  const birthYear =  getBirthYear(age);
  return lastPensionYear - birthYear  < 0 ? 0 : lastPensionYear - birthYear;
}

function getBirthYear(age:number) {
    const today = new Date()
    return today.getFullYear() - age + 1
}