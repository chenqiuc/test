
//window.onload = insert;

// var insert = function(){
//
//     var button = document.getElementById("button");
//     button.onclick = createSticky;
// }
//
// function createSticky()
// {
//
// }

// var json = {"data": [
//     {"id": "1",
//             "name": "Hunan","cities":[
//       {"id": "11", "name": "ChangSha"},
//       {"id": "12", "name": "yueyang"},
//       {"id": "13", "name": "hengyang"},
//       {"id": "14", "name": "yiyang"},
// ]},
//     {"id": "2", "name": "Hubei","cities":[
//       {"id": "21", "name": "Wuhan"},
//       {"id": "22", "name": "Ezhou"},
//       {"id": "23", "name": "Shashi"},
// ]}
// ]}

var json = {"data": [
        {"id": "1",
            "name": "Hunan","cities":[
                {"id": "11", "name": "ChangSha"},
                {"id": "12", "name": "yueyang"},
                {"id": "13", "name": "hengyang"},
                {"id": "14", "name": "yiyang"},
            ]},
        {"id": "2", "name": "Hubei","cities":[
                {"id": "21", "name": "Wuhan"},
                {"id": "22", "name": "Ezhou"},
                {"id": "23", "name": "Shashi"},
            ]}
    ]}

var province = document.getElementById("province");
var cities = document.getElementById("cities");

//清空province里面的内容
province.innerHTML = "";
//var proId =


for (var i = 0,len = json.data.length;i<len; i++)
{
    var op = document.createElement("option");
    op.value = json.data[i].id;
    op.innerHTML = json.data[i].name;
    province.appendChild(op);
  //  var option = new Option()
  // json.data[i].id;
  //  json.data[i].name;

}

province.onchange = function()
{
    //清空province里面的内容
    cities.innerHTML = "";
    var proId = province.value;
    for(var i = 0, len = json.data.length; i<len; i++)
    {//找到了该省份对应的城市列表
        if (json.data[i].id === proId)
        {
            //该省份对应的城市列表
            var cityData = json.data[i].cities;
        //    cityData.length;i<len
            //寻找城市
            for (var i = 0,len = 4; i<=len; i++)
            {
                var op = document.createElement("option");
                op.value = json.data[i].cities.id;
                op.innerHTML = cityData[i].name;
                cities.appendChild(op);
            }

            break;
        }
    }
};


