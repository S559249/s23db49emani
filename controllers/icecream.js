// const icecream = require('../models/icecream')
const icecream = require('../models/icecream');
var Icecream = require('../models/icecream');

// List of all icecreams
exports.icecream_list = async function(req, res) {
    try{
        theIcecreams = await Icecream.find();
        res.send(theIcecreams);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
                
};
// for a specific icecream.
exports.icecream_detail = function(req, res) {
res.send('NOT IMPLEMENTED: icecream detail: ' + req.params.id);
};
// Handle icecream create on POST.
//exports.icecream_create_post = function(req, res) {
//res.send('NOT IMPLEMENTED: icecream create POST');
//};

// Handle icecream create on POST.
exports.icecream_create_post = async function(req, res) {
    console.log(req.body)
    let document = new icecream();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"icecream_name":"goat", "flavour":12, "parts":"large"}
    document.name = req.body.name;
    document.flavour = req.body.flavour;
    document.parts = req.body.parts;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle icecream delete form on DELETE.
// exports.icecream_delete = function(req, res) {
// res.send('NOT IMPLEMENTED: icecream delete DELETE ' + req.params.id);
// };


// Handle icecream delete on DELETE.
exports.icecream_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await icecream.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    


// Handle icecream update form on PUT.
exports.icecream_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: icecream update PUT' + req.params.id);
};


exports.icecream_view_all_Page = async function(req, res) {
    console.log("Hello")
    try{
    theIcecreams = await Icecream.find();
    //console.log(theIcecreams)
    res.render('icecream', { title: 'Icecream Search Results', results: theIcecreams });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
        
// for a specific icecream.
exports.icecream_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await icecream.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };


    //Handle icecream update form on PUT.
    exports.icecream_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await icecream.findById( req.params.id)
        // Do updates of properties
        if(req.body.name)
            toUpdate.name = req.body.name;
        if(req.body.flavour) toUpdate.flavour = req.body.flavour;
        if(req.body.parts) toUpdate.parts = req.body.parts;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
    };
    
    // Handle a show one view with id specified by query
    exports.icecream_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
         result = await icecream.findById( req.query.id)
         res.render('icecreamdetail',
         { title: 'icecream Detail', toShow: result });
           }
    catch(err){
         res.status(500)
         res.send(`{'error': '${err}'}`);
         }
    };
    
    // Handle a show one view with id specified by query
   exports.icecream_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await icecream.findById( req.query.id)
    res.render('icecreamdetail',
    { title: 'icecream Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    // Handle building the view for creating a icecream.
    // No body, no in path parameter, no query.
    // Does not need to be async
   exports.icecream_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('icecreamcreate', { title: 'icecream Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a icecream.
    // query provides the id
   exports.icecream_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await icecream.findById(req.query.id)
    res.render('icecreamupdate', { title: 'icecream Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
   exports.icecream_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await icecream.findById(req.query.id)
    res.render('icecreamdelete', { title: 'icecream Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };  
    