module.exports = function(bonusGeneratorProvider,configConstant){
    console.log(configConstant);
    bonusGeneratorProvider.setLength(configConstant.TAM_BONUS);
};