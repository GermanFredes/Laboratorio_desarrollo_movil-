const traducciones = {
normal: "normal ",
fire: "fuego ",
water: "agua ",
electric: "eléctrico ",
grass: "planta ",
ice: "hielo ",
fighting: "lucha ",
poison: "veneno ",
ground: "tierra ",
flying: "volador ",
psychic: "psíquico ",
bug: "bicho ",
rock: "roca ",
ghost: "fantasma ",
dragon: "dragón ",
dark: "siniestro ",
steel: "acero ",
fairy: "hada "
};

export function traducir(texto){
return traducciones[texto]
|| texto;

}
