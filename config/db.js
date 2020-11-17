if(process.env.NODE_ENV == "production"){
    // Senha Tll0xtEcWL7l88Gh
    // DB Cluster0
    module.exports = {mongoURI: "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority"}
}else{
    // Substituir o <DBNAME> pelo nome do banco
    module.exports = {mongoURI: "mongodb://localhost/<DBNAME>"}
}
