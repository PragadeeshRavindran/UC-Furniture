let puPolish = {
  polishCostSqFt : 140,
  polishCostRunFt : 140,
  helper : 61,
  labour : 30,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

let melaminePolish = {
  polishCostSqFt : 60,
  polishCostRunFt : 60,
  helper : 50,
  labour : 30,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

let lacPolish = {
  polishCostSqFt : 27,
  polishCostRunFt : 27,
  helper : 30,
  labour : 30,
  partnerMaterialMargin : 0,
  ucComissionLabour : 15,
  ucComissionMaterial : 15
}

function calculate(){

  let sqFtPol = parseFloat(document.getElementById("sqFtPol").value);
  let runFtPol = parseFloat(document.getElementById("runFtPol").value); // 2

  let helper = sqFtPol + runFtPol;
  let partnerMarginQuantity  = 0 ;

  //PU Polish

  let matCost = sqFtPol*puPolish.polishCostSqFt +
                runFtPol*puPolish.polishCostRunFt;


  let addLabourCost = helper*puPolish.helper;

  let labourCost = (matCost + addLabourCost)*puPolish.labour/100;
  let partnerMarginCost = partnerMarginQuantity * puPolish.partnerMaterialMargin/100;

  let partnerEarning = labourCost + partnerMarginCost;

  let ucComissionLabour = (partnerEarning + addLabourCost)*puPolish.ucComissionLabour/100;
  let ucComissionMaterial = matCost*puPolish.ucComissionMaterial/100;

  let ucEarning = ucComissionLabour + ucComissionMaterial;

  

  let totalVal = matCost + addLabourCost + partnerEarning + ucEarning;

  document.getElementById("puPolish").innerHTML = Math.round(totalVal);

  // Melamine Polish

   matCost = sqFtPol*melaminePolish.polishCostSqFt +
                runFtPol*melaminePolish.polishCostRunFt;


   addLabourCost = helper*melaminePolish.helper;

   labourCost = (matCost + addLabourCost)*melaminePolish.labour/100;
   partnerMarginCost = partnerMarginQuantity * melaminePolish.partnerMaterialMargin/100;

   partnerEarning = labourCost + partnerMarginCost;

   ucComissionLabour = (partnerEarning + addLabourCost)*melaminePolish.ucComissionLabour/100;
   ucComissionMaterial = matCost*melaminePolish.ucComissionMaterial/100;

   ucEarning = ucComissionLabour + ucComissionMaterial;



   totalVal = matCost + addLabourCost + partnerEarning + ucEarning;

  document.getElementById("melaminePolish").innerHTML = Math.round(totalVal);


  // Lac/Sealer Polish

   matCost = sqFtPol*lacPolish.polishCostSqFt +
                runFtPol*lacPolish.polishCostRunFt;


   addLabourCost = helper*lacPolish.helper;

   labourCost = (matCost + addLabourCost)*lacPolish.labour/100;
   partnerMarginCost = partnerMarginQuantity * lacPolish.partnerMaterialMargin/100;

   partnerEarning = labourCost + partnerMarginCost;

   ucComissionLabour = (partnerEarning + addLabourCost)*lacPolish.ucComissionLabour/100;
   ucComissionMaterial = matCost*lacPolish.ucComissionMaterial/100;

   ucEarning = ucComissionLabour + ucComissionMaterial;



   totalVal = matCost + addLabourCost + partnerEarning + ucEarning;

  document.getElementById("lacPolish").innerHTML = Math.round(totalVal);


}
