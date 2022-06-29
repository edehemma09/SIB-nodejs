const Sib = require('sib-api-v3-sdk')

require('dotenv').config()

const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY

const sender = {
	name: 'Emmanuel Edeh',
	email: 'jamder534@gmail.com',
	// name: 'James Derrick',
}

const receivers = [
	{
		email: 'edehemmanuelebubechukwu@yahoo.com',
		// Client Email
	},
]

const transactionalEmailApi = new Sib.TransactionalEmailsApi()

transactionalEmailApi.sendTransacEmail({
		subject: 'Subscribe to PMT Tech Coding Class to become a developer',
		sender,
		to: receivers,
		textContent: 
		 `PMT Tech Coding will teach you how to become a developer with Mentorship exclusive.`,
		// htmlContent: 
		// // `
		// // // 	<h1>Become a {{params.role}} developer</h1>
		// // // 	<a href=''>PMT TEch Coding</a>
		// // // `,
		
		// // params: {
		// // 	role: 'frontend',
		// // },
		// // app.get("/",(req,res)=> {
		// // 	res.sendFile(__dirname + "/index.html");
		// //})
	})
	.then(console.log)
	.catch(console.log)
// .then(
// 	function (data) {
// 		console.log(data)
// 	},
// 	function (error) {
// 		console.error(error)
// 	}
// )
