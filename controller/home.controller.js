// Here you can add your bussiness logic for your api
// and then you can export this logic to routes folder

exports.home=async(req, res)=>{
    res.json({"message":"Home"})

}