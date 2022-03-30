import DescriptionDroite from "./DescriptionDroite";
import DescriptionGauche from "./DescriptionGauche";

export default function Description() {
  return (
    <section className='space-y-10 lg:-mt-[100px] lg:space-y-20'>
      <DescriptionDroite
        image='produits/description/description_1.webp'
        titre='Get a super-clean surface '
        titrebg='easily'
        texte='
 Traditional cleaning cloths <b>leave streaks, a film of moisture or lint marks.</b>
<br><br>
It also means you have to buy <b>more cleaning products</b>, as the ones that leave marks are likely to make messes worse as they sit on surfaces while you work.
<br><br>
Nanofiber cloth is designed to be <b>100% streak and residue free</b> - to leave your surfaces clean and shiny, without overusing chemicals or adding more products to your environmental footprint.
        '
      />

      <DescriptionGauche
        image='produits/description/description_2.webp'
        titre='Clean your home '
        titrebg="without chemicals"
        texte='
        Leaving streaks, film of moisture and lint behind when using newly purchased cleaning cloths.
        <br><br>
        After all that effort, potential customers just want a clean and shiny surface without lint left behind.
        <br><br>
        Nanofiber is <b>the right material</b>. With its super fine pores, it wipes everything clean and leaves no <b>film of moisture.</b>
'
      />

      <DescriptionDroite
        image='produits/description/description_3.webp'
        titre='Get Rid of '
        titrebg='Streaks'
        texte="
You don't want to leave a <b>watery residue</b> after your usual cleaning routine.
<br><br>
You would also like a cleaning cloth that you can use <b>even around children, pets or people with allergies.</b>
<br><br>    
The Nanofiber cloth is the new generation of cleaning cloths. It does <b>not contain any chemical agents and does not leave any oily film</b> or streaks. The Nano fibers instead ensure the surfaces are always clean and shiny but unlike the existing fabrics, do not leave any residue on the surface.
        "
      />

      <DescriptionGauche
        image='produits/description/description_4.webp'
        titre="At last,"
        titrebg=' impeccable windows'
        texte="
Getting on your hands and knees to polish is not pleasant. <b>Scratching your elbow against the stove is not fun either.</b>
<br><br>    
Stains, streaks and lint, oh my!
<br><br>     
Struggling to keep your kitchen or bathroom spotless? You have scrubbed the surface until it's raw and you still have stains all over it? Why bother? The Nanofiber cloth can get any surface to a new level of shine without any chemicals. <b>A powerful combination of Nanofibers and electrostatic technology</b> works together to remove all dirt. The Nanofiber cloth picks up dust, lint and dirt as it glides over all surfaces. It doesn't matter if it's stainless steel, glass or tile – simply wipe clean with the Nanofiber cloth and that's it!"
      />
    </section>
  );
}
