let id="no";//displaydata();
//localStorage.clear();
function managedata() {
    let email = document.getElementById("mail").value;
    let firstname = document.getElementById("f-name").value;
    let lastname = document.getElementById("l-name").value;
    let phoneno = document.getElementById("no").value;
    let date = document.getElementById("dob").value;
    let gender;
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    }
    else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }
    if(email==''||firstname==''||lastname==''||phoneno==''||date==''||gender=='')
    {
        //document.getElementById("msg").innerHTML="plese enter record";
        alert("plese enter fields");
    }
    else{
    if(id=="no")
    {
       let userdetails = getdata();
      if(userdetails==null)
      {
       let data = [{
            "mail": "jj@gmail.com","fname": "jeeva","lname": "jothi","phno": 994472,"dateofbirth": "22-10-2022","gender": "female"
        }];
        setdata(data);
    }
    else{
        userdetails.push({
            mail: email, fname: firstname, lname: lastname, phno: phoneno, dateofbirth: date, gender: gender,});
        setdata(userdetails);
    }
}

else{
    let userdetails=getdata();
    userdetails[id].mail=email;
    userdetails[id].fname=firstname;
    userdetails[id].lname=lastname;
    userdetails[id].phno=phoneno;
    userdetails[id].dateofbirth=date;
    userdetails[id].gender=gender;
    setdata(userdetails);
}
}
    document.getElementById("mail").value = "";
    document.getElementById("f-name").value = "";
    document.getElementById("l-name").value = "";
    document.getElementById("no").value = "";
    document.getElementById("dob").value = "";
    var ele = document.getElementsByName("gender");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
    var check = document.querySelectorAll(".terms");
    for (let i = 0; i < check.length; i++)
        check[i].checked = false;
    displaydata();
}

function displaydata()
{
     let userdetails=getdata();
     if(userdetails!=null)
     {
         let html='';
         let sno=1;
         for(let j=0; j<userdetails.length; j++)
         {
             html=html+
             `<tr>
             <td>${sno}</td>
             <td>${userdetails[j].mail}</td>
             <td>${userdetails[j].fname}</td>
             <td>${userdetails[j].lname}</td>
             <td>${userdetails[j].phno}</td>
             <td>${userdetails[j].dateofbirth}</td>
             <td>${userdetails[j].gender}</td>
             <td><button class="btn edit" onclick="editdata(${j})">Edit<br>
             <button class="btn del" onclick="deletedata(${j})">Delete</td>
             </tr>`;
             sno++;
         }
         document.getElementById("myTable").innerHTML=html;
     }
}
displaydata();
function editdata(rid)
{
   id=rid;
   let userdetails=getdata();
    document.getElementById("mail").value = userdetails[rid].mail;
    document.getElementById("f-name").value = userdetails[rid].fname;
    document.getElementById("l-name").value = userdetails[rid].lname;
    document.getElementById("no").value = userdetails[rid].phno;
    document.getElementById("dob").value = userdetails[rid].dateofbirth;
    var ele = document.getElementsByName("gender");
    for (var i = 0; i < ele.length; i++)
        ele[i].checked = false;
}
function deletedata(rid)
{   if(confirm('Are you sure to delete this record?')){

    let userdetails=getdata();
    userdetails.splice(rid,1);
    setdata(userdetails);
    displaydata();
}
}
function getdata() {
    let userdetails = JSON.parse(localStorage.getItem("formdetails"));
    return userdetails;
}

function setdata(userdetails) {
    localStorage.setItem("formdetails", JSON.stringify(userdetails));
}