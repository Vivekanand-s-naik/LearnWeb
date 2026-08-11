class Server{
    #id;
    name;
    constructor(privateId, servername){
        this.#id = privateId;
        this.name = servername;
    }
    get #serverId(){
        if (true){
            //simualte authentication
            return this.#id
        }
    }
    getPrivateServerId(){
        return this.#serverId + ' ' + this.name;
    }
    set serverName(newServerName = this.name + new Date().getFullYear()){
        this.name = newServerName;
        console.log("name Updated status 100");
    }
}

let srvr = new Server(101, 'FastAccess');
console.log(srvr.getPrivateServerId());
srvr.serverName = undefined;
console.log(srvr.getPrivateServerId());
