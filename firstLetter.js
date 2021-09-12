const user = "Bekzod Erkinov Dev"

const arrUser = user.split(' ')

console.log(arrUser)

// * v1.0
// const f = arrUser[0].charAt(0)
// const l = arrUser[1][0]
// console.log(`${f} ${l}`)


// * v2.0
// for (let i = 0; i < arrUser.length; i++) {
//   console.log(`${arrUser[i][0]}`)
// }


// * v3.0
arrUser.forEach(name => {
  console.log(name[0])
})