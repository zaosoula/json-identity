const fs = require('fs');
class JsonPerson {

  constructor(arg) {
    this.data = null
    this.currentUpdate = undefined;
    this.ready = false;
    this.path = null;
    this.VERSION = "0.0.3"
  }

  blank(overwriteCurrent){
    if(overwriteCurrent!==true && this.ready===true){
      let e = new Error("This JsonPerson instance is already filled with information. Use .blank(true) to avoid this error"); // e.name est "Error"
      e.name = "DataOverwriteProtection";
      throw e;
    }else{
      this.data = {
        "json-identity": {
          "version": null,
          "id": null,
          "issuer": null,
          "update": [
            {
              "from": null,
              "to": null,
              "purpose": null,
              "additionalNotes": null
            }
          ]
        },
        "basics": {
          "names": {
            "given": null,
            "middle": null,
            "family": null,
            "formatted": null,
            "honorificPrefix": null,
            "honorificSuffix": null
          },
          "birth": {
            "date": null,
            "place": [
              {
                "country": null,
                "locality": null,
                "region": null,
                "postalCode": null,
                "street": null,
                "usage": [
                  {
                    "from": null,
                    "to": null,
                    "purpose": null,
                    "additionalNotes": null
                  }
                ]
              }
            ]
          },
          "death": {
            "date": null,
            "place": [
              {
                "country": null,
                "locality": null,
                "region": null,
                "postalCode": null,
                "street": null,
                "usage": [
                  {
                    "from": null,
                    "to": null,
                    "purpose": null,
                    "additionalNotes": null
                  }
                ]
              }
            ]
          }
        },
        "contact": {
          "address": [
            {
              "country": null,
              "locality": null,
              "region": null,
              "postalCode": null,
              "street": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ],
          "phones": [
            {
              "local": null,
              "international": null,
              "provider": null,
              "type": null,
              "primary": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ]
        },
        "medical": {
          "gender": [
            {
              "sex": null,
              "identifyAs": null
            }
          ],
          "organDonor": null,
          "diets": [
            {
              "type": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ],
          "bloodgroup": null,
          "smoker": null
        },
        "internet": {
          "emails": [
            {
              "value": null,
              "type": null,
              "primary": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ],
          "profiles": [
            {
              "network": null,
              "username": null,
              "link": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ]
        },
        "social": {
          "marital": null,
          "sexualOrientation": null,
          "parents": null,
          "children": null,
          "knows": null,
          "religion": null,
          "vehicles": [
            {
              "brand": null,
              "model": null,
              "color": null,
              "plate": null
            }
          ]
        },
        "physical": {
          "height": null,
          "skin": null,
          "race": null,
          "hair": {
            "colors": null,
            "length": null,
            "type": null
          },
          "eyes": {
            "left": [
              {
                "color": null,
                "blind": null,
                "correction": null
              }
            ],
            "right": [
              {
                "color": null,
                "blind": null,
                "correction": null
              }
            ]
          },
          "bodyArts": {
            "tattoos": [
              {
                "bodyLocation": null,
                "designDescription": null,
                "width": null,
                "height": null,
                "colors": null,
                "usage": [
                  {
                    "from": null,
                    "to": null,
                    "purpose": null,
                    "additionalNotes": null
                  }
                ]
              }
            ],
            "piercings": [
              {
                "bodyLocation": null,
                "designDescription": null,
                "width": null,
                "height": null,
                "length": null,
                "weight": null,
                "colors": null,
                "usage": [
                  {
                    "from": null,
                    "to": null,
                    "purpose": null,
                    "additionalNotes": null
                  }
                ]
              }
            ]
          }
        },
        "resume": {
          "work": [
            {
              "organisation": [
                {
                  "name": null,
                  "website": null,
                  "phones": [
                    {
                      "local": null,
                      "international": null,
                      "provider": null,
                      "type": null,
                      "primary": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ],
                  "emails": [
                    {
                      "value": null,
                      "type": null,
                      "primary": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ],
                  "numberOfEmployees": null,
                  "parentOrganization": null,
                  "address": [
                    {
                      "country": null,
                      "locality": null,
                      "region": null,
                      "postalCode": null,
                      "street": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ]
                }
              ],
              "position": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ],
          "volunteer": [
            {
              "organisation": [
                {
                  "name": null,
                  "website": null,
                  "phones": [
                    {
                      "local": null,
                      "international": null,
                      "provider": null,
                      "type": null,
                      "primary": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ],
                  "emails": [
                    {
                      "value": null,
                      "type": null,
                      "primary": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ],
                  "numberOfEmployees": null,
                  "parentOrganization": null,
                  "address": [
                    {
                      "country": null,
                      "locality": null,
                      "region": null,
                      "postalCode": null,
                      "street": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ]
                }
              ],
              "position": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ],
          "education": [
            {
              "organisation": [
                {
                  "name": null,
                  "website": null,
                  "phones": [
                    {
                      "local": null,
                      "international": null,
                      "provider": null,
                      "type": null,
                      "primary": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ],
                  "emails": [
                    {
                      "value": null,
                      "type": null,
                      "primary": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ],
                  "numberOfEmployees": null,
                  "parentOrganization": null,
                  "address": [
                    {
                      "country": null,
                      "locality": null,
                      "region": null,
                      "postalCode": null,
                      "street": null,
                      "usage": [
                        {
                          "from": null,
                          "to": null,
                          "purpose": null,
                          "additionalNotes": null
                        }
                      ]
                    }
                  ]
                }
              ],
              "area": null,
              "studyType": null,
              "usage": [
                {
                  "from": null,
                  "to": null,
                  "purpose": null,
                  "additionalNotes": null
                }
              ]
            }
          ],
          "awards": null,
          "publications": null,
          "skills": null,
          "languages": null,
          "references": null
        }
      }
      this.currentUpdate = undefined;
      if(typeof arg=== 'undefined' || arg==true){
        this.data['json-identity'].version = this.VERSION;
        let currentUpdate = Object.assign({}, this.data['json-identity'].update[0]);
        currentUpdate.from = new Date().getTime();
        currentUpdate.purpose = "creation";
        this.currentUpdate = currentUpdate;
        // console.log(currentVersion);
        this.data['json-identity'].update.push(this.currentUpdate);

        this.logUpdated("json-identity.version", this.data['json-identity'].version);
        this.logUpdated("json-identity.purpose", currentUpdate.purpose);
        this.ready = true;

      }else {
        this.ready = true;
      }
    }
  }

  load(path, overwriteCurrent){
    return new Promise((resolve,reject)=>{
      if(overwriteCurrent!==true && this.ready===true){
        let e = new Error("This JsonPerson instance is already filled with information. Use .load(PATH, true) to avoid this error"); // e.name est "Error"
        e.name = "DataOverwriteProtection";
        throw e;
      }else{
        fs.readFile(path, (err, data) => {
            if (err) throw err;
            this.data = JSON.parse(data);
            this.ready = true;
            this.path = path;
            resolve();
        });
      }
    });
  }

  save(path, overwritePath) {
    return new Promise((resolve,reject)=>{

      if(typeof path!=="undefined" && this.path!==null && overwritePath!==true){
        let e = new Error("This JsonPerson instance already have a path. Use .save(PATH, true) to avoid this error"); // e.name est "Error"
        e.name = "PathOverwriteProtection";
        throw e;
      }else if(typeof path==="undefined" && this.path!==null){
        path = this.path;
      }else if(typeof path==="undefined" && this.path===null){
        let e = new Error("This JsonPerson instance do not have a path. Use .save(PATH) or set .path in this instance to avoid this error"); // e.name est "Error"
        e.name = "MissingPath";
        throw e;
      }

      let jsonData = JSON.stringify(this.data);

      fs.writeFile(path, jsonData, (err) => {
          if (err) throw err;
          resolve();
      });

    });
  }
  logUpdated(path, message){
    this.log("Updated property : "+path+((typeof message !== 'undefined')?' --> '+message+' ':''));
  }
  log(message){
    this.currentUpdate.additionalNotes=(this.currentUpdate.additionalNotes?this.currentUpdate.additionalNotes+'\n':"") + message
  }
}
module.exports = JsonPerson
