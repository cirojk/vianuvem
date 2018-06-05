const express = require('express')
const cors = require('cors')
const app = express()

const circles = [
	{
		id: 1,
		name: 'Twitter',
		image: 'img/twitter.jpg',
		color: '#aa2b31',
		size: 3
	},
	{
		id: 2,
		name: 'Facebook',
		image: 'img/facebook.jpg',
		color: '#63e184',
		size: 1
	},
	{
		id: 3,
		name: 'Skype',
		image: 'img/skype.png',
		color: '#033d49',
		size: 2
	},
]

app.use(express.static('public'))
app.use(cors())

app.get('/', (req, res) => {

	let template = '<link rel="stylesheet" type="text/css" href="css/style.css" /><div class="content">';

	circles.forEach(circle => {
			template += '<div class="img-container"><img src="' + circle.image + '" title="' + circle.name + '" style="border-color: ' + circle.color + '; width: ' + (circle.size * 100) + 'px;" /></div>';
				});


	template+= '</div>';

  
	res.send(template)
  })

app.get('/circles', (req, res) => {
    res.send(circles)
})

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})
