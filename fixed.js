function createServer2() {
            fetch(`https://cors-anywhere.herokuapp.com/https://1/api/application/servers`, {
                method: 'POST',
                body: JSON.stringify({
                    name: "Basic - Discord.JS",
                    user: 3,
                    egg: 16,
                    docker_image: "quay.io/parkervcp/pterodactyl-images:debian_nodejs-12",
                    startup: 'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${NODE_PACKAGES} ]]; then /usr/local/bin/npm install ${NODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then  /usr/local/bin/npm install --production; fi; /usr/local/bin/node /home/container/{{BOT_JS_FILE}}',
                    environment: {
                        BOT_JS_FILE: "index.js",
                        INSTALL_REPO: "",
                        USER_UPLOAD: 0,
                        INSTALL_BRANCH: "",
                        NODE_PACKAGES: "",
                        AUTO_UPDATE: 0
                    },
                    limits: {
                        memory: 256,
                        swap: 0,
                        disk: 0,
                        io: 500,
                        cpu: 0
                    },
                    feature_limits: {
                        databases: 0,
                        allocations: 0
                    },
                    allocation: {
                        default: 1,
                        additional: [
                            0
                        ]
                    }
                }),
                headers: {
                    "Content-type": "application/json",
                    "Authorization": "Bearer [no]"
                }
            }).then(res => res.json()).then(json => {
                console.log(json)
            })
        }
