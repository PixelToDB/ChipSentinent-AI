exports.logStep = (step, data) => {
  console.log(`\n===== ${step} =====`);
  console.log(JSON.stringify(data, null, 2));
};