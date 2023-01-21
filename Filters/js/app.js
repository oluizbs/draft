const effects = document.getElementById("effects");
const effectIntensity = document.getElementById("effectIntensity");

const getFilter = () => effects.value ?? 'none' 

const getIntensity = () => effectIntensity.value ?? 0

const getMetric = effect => {
    if (effect == 'blur') return 'px';
    if (effect == 'hue-rotate') return 'deg';
    return '%';
}

const setFilter = () => {
    const appliedFilter = getFilter()
    const valueIntensity = getIntensity() + getMetric(appliedFilter);
    const image = document.getElementById("image");
    image.style.filter = `${appliedFilter}(${valueIntensity})`
}

effectIntensity.addEventListener("click", setFilter)
effects.addEventListener("click", setFilter)