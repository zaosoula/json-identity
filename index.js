

class jsonPerson {

  constructor(defineDefaults) {
    this.data = {
      "json-identity": {
        "version": null,
        "id": null,
        "update": [{
          "from": null,
          "to": null,
          "purpose": null,
          "additionalNotes": null
        }]
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
          "place": [{
            "country": null,
            "locality": null,
            "region": null,
            "postalCode": null,
            "street": null,
            "usage": [{
              "from": null,
              "to": null,
              "purpose": null,
              "additionalNotes": null
            }]
          }]
        },
        "death": {
          "date": null,
          "place": [{
            "country": null,
            "locality": null,
            "region": null,
            "postalCode": null,
            "street": null,
            "usage": [{
              "from": null,
              "to": null,
              "purpose": null,
              "additionalNotes": null
            }]
          }]
        }
      },
      "contact": {
        "address": [{
          "country": null,
          "locality": null,
          "region": null,
          "postalCode": null,
          "street": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }],
        "phones": [{
          "local": null,
          "international": null,
          "provider": null,
          "type": null,
          "primary": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }]
      },
      "medical": {
        "gender": [{
          "sex": null,
          "identifyAs": null
        }],
        "organDonor": null,
        "diets": [{
          "type": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }],
        "bloodgroup": null
      },
      "internet": {
        "emails": [{
          "value": null,
          "type": null,
          "primary": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }],
        "profiles": [{
          "network": null,
          "username": null,
          "link": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }]
      },
      "social": {
        "marital": null,
        "sexualOrientation": null
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
          "left": [{
            "color": null,
            "blind": null,
            "correction": null
          }],
          "right": [{
            "color": null,
            "blind": null,
            "correction": null
          }]
        },
        "bodyArts": {
          "tattoos": [{
            "bodyLocation": null,
            "designDescription": null,
            "width": null,
            "height": null,
            "colors": null,
            "usage": [{
              "from": null,
              "to": null,
              "purpose": null,
              "additionalNotes": null
            }]
          }],
          "piercings": [{
            "bodyLocation": null,
            "designDescription": null,
            "width": null,
            "height": null,
            "length": null,
            "weight": null,
            "colors": null,
            "usage": [{
              "from": null,
              "to": null,
              "purpose": null,
              "additionalNotes": null
            }]
          }]
        }
      },
      "resume": {
        "work": [{
          "organisation": [{
            "name": null,
            "website": null,
            "phones": [{
              "local": null,
              "international": null,
              "provider": null,
              "type": null,
              "primary": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }],
            "emails": [{
              "value": null,
              "type": null,
              "primary": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }],
            "numberOfEmployees": null,
            "parentOrganization": null,
            "address": [{
              "country": null,
              "locality": null,
              "region": null,
              "postalCode": null,
              "street": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }]
          }],
          "position": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }],
        "volunteer": [{
          "organisation": [{
            "name": null,
            "website": null,
            "phones": [{
              "local": null,
              "international": null,
              "provider": null,
              "type": null,
              "primary": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }],
            "emails": [{
              "value": null,
              "type": null,
              "primary": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }],
            "numberOfEmployees": null,
            "parentOrganization": null,
            "address": [{
              "country": null,
              "locality": null,
              "region": null,
              "postalCode": null,
              "street": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }]
          }],
          "position": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }],
        "education": [{
          "organisation": [{
            "name": null,
            "website": null,
            "phones": [{
              "local": null,
              "international": null,
              "provider": null,
              "type": null,
              "primary": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }],
            "emails": [{
              "value": null,
              "type": null,
              "primary": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }],
            "numberOfEmployees": null,
            "parentOrganization": null,
            "address": [{
              "country": null,
              "locality": null,
              "region": null,
              "postalCode": null,
              "street": null,
              "usage": [{
                "from": null,
                "to": null,
                "purpose": null,
                "additionalNotes": null
              }]
            }]
          }],
          "area": null,
          "studyType": null,
          "usage": [{
            "from": null,
            "to": null,
            "purpose": null,
            "additionalNotes": null
          }]
        }],
        "awards": null,
        "publications": null,
        "skills": null,
        "languages": null,
        "references": null
      }
    }
    this.currentUpdate = undefined;
    if(typeof defineDefaults=== 'undefined' || defineDefaults==true){
      this.data['json-identity'].version = "0.0.1";
      let currentUpdate = Object.assign({}, this.data['json-identity'].update[0]);
      currentUpdate.from = new Date().getTime();
      currentUpdate.purpose = "creation";
      this.currentUpdate = currentUpdate;
      // console.log(currentVersion);
      this.data['json-identity'].update.push(this.currentUpdate);

      this.logUpdated("json-identity.version", this.data['json-identity'].version);
      this.logUpdated("json-identity.purpose", currentUpdate.purpose);

    }


  }

  logUpdated(path, message){
    this.log("Updated property : "+path+((typeof message !== 'undefined'?' --> '+message+' ':'')));
  }
  log(message){
    this.currentUpdate.additionalNotes=(this.currentUpdate.additionalNotes?this.currentUpdate.additionalNotes+'\n':"") + message
  }
}
module.exports = jsonPerson
