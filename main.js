import people from './data.js'

// * Table
const richesTableBody = document.querySelector('#riches-table > tbody')
const poorsTableBody = document.querySelector('#poors-table > tbody')
// * Fragment
const fragmentRichesTable = document.createElement('fragment')
const fragmentPoorsTable = document.createElement('fragment')


// * Filter & Append
people.filter(people => {
  const tdAge = document.createElement('td')
  const tdName = document.createElement('td')
  const tdSource = document.createElement('td')
  const tdCountry = document.createElement('td')
  const tdFinance = document.createElement('td')
  const tdFirstLetter = document.createElement('td')
  const tr = document.createElement('tr')
  const nameArr = people.name.split(' ')


  if (people.finance > 70) {
    tdAge.textContent = people.age
    tdName.textContent = people.name
    tdSource.textContent = people.source
    tdCountry.textContent = people.country
    tdFinance.textContent = people.currency+people.finance+' B'
    tr.append(tdName)
    tr.append(tdFinance)
    tr.append(tdAge)
    tr.append(tdSource)
    tr.append(tdCountry)
    
    tdFirstLetter.textContent = `${nameArr[0][0]} ${nameArr[1]?.[0] ?? ''} ${nameArr[2]?.[0] ?? ''}` // To'g'ri usul qanday qilinadi ?
    tr.append(tdFirstLetter)
    
    // fragmentRichesTable.append(tr) // Fragment bilan qo'shilsa to'g'ri ishlamayapti!
    richesTableBody.append(tr)
  } else {
    tdAge.textContent = people.age
    tdName.textContent = people.name
    tdSource.textContent = people.source
    tdCountry.textContent = people.country
    tdFinance.textContent = people.currency+people.finance+' B'
    tr.append(tdName)
    tr.append(tdFinance)
    tr.append(tdAge)
    tr.append(tdSource)
    tr.append(tdCountry)
    
    tdFirstLetter.textContent = `${nameArr[0][0]} ${nameArr[1]?.[0] ?? ''} ${nameArr[2]?.[0] ?? ''}` // To'g'ri usul qanday qilinadi ?
    tr.append(tdFirstLetter)
    
    // fragmentPoorsTable.append(tr) // Fragment bilan qo'shilsa to'g'ri ishlamayapti!
    poorsTableBody.append(tr)
  }
})


// richesTableBody.append(fragmentRichesTable) // filter ichiga yozilsa bo'ladimi?
// poorsTableBody.append(fragmentPoorsTable) // filter ichiga yozilsa bo'ladimi?

// ! Filter ichida forEach() ishlamadi (nima uchun)?