export default function(name) {
  let nameArr = name.split("");
  nameArr[0] = nameArr[0].toUpperCase();
  return nameArr.join("");
}
