const express = require('express')
const app = express()
const path = require('path')
let persons = []
let cars = []

app.use(express.urlencoded({ extended: true}))
app.set('views', './src/views')
app.set('view engine', 'pug')


app.get('/', (req,res)=>{
      res.render('index', {})
})
app.get('/admin', (req,res)=>{
      res.render('admin', {

      })
})
app.post('/admin', (req,res)=>{
      const id = req.body.id
      const person = persons.find( (per)=> +per.id === parseInt(id))
      if(!person){
            res.render('home1')
      }
      const index = persons.findIndex((per)=> +per.id ===parseInt(id))
      persons[index].disabled = !persons[index].disabled
      console.log(req.body.id)
      console.log(persons)

      res.render('index',{

      })
})

app.post('/', (req,res)=>{
      const { name, surname,id, birthday,park=[],disabled=false} = req.body;
      if(id){
            persons.push( {id, name,surname, birthday, park,disabled} )
      }
      const {mark,model,vin,number,color,personId} = req.body;
      const person = persons.find((per)=> +per.id ===parseInt(personId))
      if(vin){
            let index = persons.findIndex((per)=> +per.id ===parseInt(personId))
            if(!persons[index]){
                  res.render('home1')
            }else{
                  if(persons[index].disabled){
                        res.render('home')
                     }else{
                        cars.push({vin,number,mark,model,color,person})
                        persons[index].park.push({vin,number,mark,model,color})
                     }
            }
           
            
      }
      console.log(persons)
      // console.log(persons)
      res.render('index')
})
app.post('/persons', (req,res)=>{
      const  id = req.body.id;
      const person = persons.find( (per)=> +per.id === parseInt(id))
      if(!person){
            res.render('home1')
      }
      if(person.disabled){
            res.render('home')
      }
      res.render('person',{
            person:person
      })
      
})
app.post('/cars', (req,res)=>{
      const  vin = req.body.vin;
      const car = cars.find( (c)=> +c.vin === parseInt(vin))
      if(!car){
            res.render('home2')
      }
      res.render('cars',{
            car:car
      })
      
})
app.post('/cars/edit', (req,res)=>{
      const ide = req.query.ide
      const car = cars.find((c) => +c.vin === parseInt(ide))
      const rem = car.vin
      car.mark = req.body.mark || car.mark
      car.model = req.body.model || car.model
      car.vin = req.body.vin || car.vin
      car.number = req.body.number || car.number
      car.color = req.body.color || car.color
      car.person = car.person
      let id1 = car.person.id
      if(req.body.id){
            const id = req.body.id
            const person = persons.find((p) => +p.id=== parseInt(id))
            car.person = person
            person.park.push(car)
            const index = persons.findIndex((per) => +per.id === parseInt(id))
            persons.splice(index,1,person )
            const person1 = persons.find((p) => +p.id=== parseInt(id1))
            const personIndex = persons.findIndex((per) => +per.id === parseInt(id1))
            const index1 = person1.park.findIndex((c) => +c.vin === parseInt(rem))
            person1.park.splice(index1,1)
            persons.splice(personIndex,1,person1)
            console.log(persons)

      }
      const indexed = cars.findIndex((c) => +c.vin === parseInt(ide))
      cars.splice(indexed,1,car )
      res.render('index')

})
app.post('/persons/edit', (req,res)=>{
      const  ide = req.query.ide;
      console.log(ide)
      const person = persons.find( (per)=> +per.id === parseInt(ide))
      person.name = req.body.name || person.name
      person.surname = req.body.surname || person.surname
      person.id = req.body.id || person.id 
      person.birthday = req.body.birthday || person.birthday
      person.park = person.park
      person.disabled = false
      const index = persons.findIndex((per) => +per.id === parseInt(ide))
      console.log(index)
      persons.splice(index,1,person )
      console.log(person)
      console.log(persons)
      res.render('index')
})

app.listen(3000)



