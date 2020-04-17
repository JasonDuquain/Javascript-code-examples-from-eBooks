

function getJSON(url) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();  
				    
    request.open("GET", url);	      
				    
    request.onload = function () {	      
      try {
        if(this.status == 200 ){			
          resolve(JSON.parse(this.response));	
        }
        else {
         reject(this.status + " " + this.statusText); 
        }
      }
      catch(e){
        reject(e.message);					
      }
    };
				    
    request.onerror = function () {				
      reject(this.status + " " + this.statusText);
    };							
				    
    request.send();				
  });
}

function getJSONCB(url, cb) {
    const request = new XMLHttpRequest();  
				    
    request.open("GET", url);	      
				    
    request.onload = function () {	      
        if (this.status == 200 ) {			
          cb(null, this.response);	
        }
        else {
           cb(this.status + " " + this.statusText); 
        }					
    };
				    
    request.onerror = function () {				
      cb(this.status + " " + this.statusText);
    };							
				    
    request.send();				
}


