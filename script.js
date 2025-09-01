//your JS code here. If required.

function submitform() {
	const age= document.querySelector("#age").value;
const name= document.querySelector("#name").value;
if(!age || !name){
	alert("Please enter valid details.");
}
	if(age && name)
	{
	let promise1 = new Promise((res,rej)=>{
		setTimeout(()=>{
			if(age>18){
				res("Welcome, . You can vote.");
			}
			else{
				rej("Oh sorry . You aren't old enough.");
			}
		},4000)
	})
	promise1
        .then(result => {
          alert(result);
        })
        .catch(error => {
          alert(error);
        });

      return false;
	}
}

