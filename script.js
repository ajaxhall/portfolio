const landscapeBtn = document.getElementById('landscape');
const natureBtn = document.getElementById('nature');
const wildlifeBtn = document.getElementById('wildlife');
const lifestyleBtn = document.getElementById('lifestyle');
const streetBtn = document.getElementById('street');
const portraitBtn = document.getElementById('portrait');
const miscBtn = document.getElementById('misc');
const designBtn = document.getElementById('design');
const productBtn = document.getElementById('product');
const javaDiv = document.getElementById('java-div');

landscapeBtn.addEventListener('click', () => {
    landscapeBtn.classList.add('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936344/lake_mcdonald_w0zlzs.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936347/Pheonix_Skyline_icwyzd.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936357/cloudgiants_ocrtyh.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730937147/windmills_ltzspp.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936345/Hyalite_Creek_bxyfm2.jpg" oncontextmenu="return false;">  
    <div class="row cust1">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936354/temporary_s2xnxk.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936959/coloradolake_rwiatm.jpg" oncontextmenu="return false;">
    </div>
    <div class="row cust2">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936346/Lighthouse_Hut_s7m5ys.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936353/Tree_dkmlcm.jpg" oncontextmenu="return false;">
    </div>
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936350/milkyway_tc7ea9.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936351/rainerfromabove_a0hnzu.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936355/bare_tree_dgaghs.jpg" oncontextmenu="return false;">
    <div class="row">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1729875821/lonepeak_s14ow7.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1729877462/rainier_grounds_m0acny.jpg" oncontextmenu="return false;">
    </div>
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936344/dunewalkers_zfiqvr.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936350/machupichu_kcninb.jpg" oncontextmenu="return false;">
    <div class="row">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936350/NorthDakotaLandscapeVertical_fh4het.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936354/Windmill_ene4k8.jpg" oncontextmenu="return false;">
    </div>
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936358/BeachCoast_o0d7cg.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936355/badlands3_h6rtwe.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936352/SnowyHill_rjtj5y.jpg" oncontextmenu="return false;">
    <div class="row">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936357/YellowstoneCliff_cye7dm.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730936351/Snowy_Flatbed_zuegvi.jpg" oncontextmenu="return false;">
    </div>`
});
natureBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.add('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730956845/Crammage_Creek_ha38i1.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730956844/Material_Earth_kw37ao.jpg" oncontextmenu="return false;">
    </div>
    <div class="row cust3">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730956842/Meadows_Waters_xky1ke.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730956847/Muted_Leaves_jtww79.jpg" oncontextmenu="return false;">
    </div>`
});
wildlifeBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.add('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957590/NDgoats_land_16x9_u6b1in.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957579/deer_at_lake_mcdonald_ytmxui.jpg" oncontextmenu="return false;">
    <div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957588/Squirl_zuutb6.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957587/MountainGoatTemp_bnmuy8.jpg" oncontextmenu="return false;">
    </div>`
});
lifestyleBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.add('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<div class="row cust4">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960641/hanz_ldvla7.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960634/Lonely_Mountain_wnrkfm.jpg" oncontextmenu="return false;">
    </div>
    <div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960634/yellowrunner_s5zvjm.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960634/paraglide_notczo.jpg" oncontextmenu="return false;">
    </div>
    <div class="row cust9">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960639/5050_mie6tk.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960636/Lumen_Field_jyqwmi.jpg" oncontextmenu="return false;">
    </div>
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960638/FenwayPark_temp_oqxxla.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960637/arizonasoccerrunning_d1llyp.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960637/graydune_dihodl.jpg" oncontextmenu="return false;">
    <div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960638/Noah_Hammocking_osrkgp.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730962007/karmabike_rweo9j.jpg" oncontextmenu="return false;">
    </div>
    <div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730960639/Raid_Hammocking_e24szc.jpg" oncontextmenu="return false;">
        <img src="" oncontextmenu="return false;">
    </div>`
});
streetBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.add('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959441/One_Way_Up_n58nkh.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959442/floral_jiw6el.jpg" oncontextmenu="return false;">
    </div>
    <div class="row cust7">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959441/walker_x7vyry.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959527/clover_carrier_dc8xdb.jpg" oncontextmenu="return false;">
    </div>
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959440/backseatwonder_1_hbhaxq.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959442/structure_mi420n.jpg" oncontextmenu="return false;">
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959440/hydroelectrica_gt0hwq.jpg" oncontextmenu="return false;">
    <div class="row cust8">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959443/waiting_isvhwo.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959443/Seattle_from_Needles_kew2gl.jpg" oncontextmenu="return false;">
    </div>`
});
portraitBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.add('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<div class="row cust4">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957816/Seeing_Double_ve4ita.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957818/2Factor_cl9buf.jpg" oncontextmenu="return false;">
    </div>
    <div class="row cust5">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957814/star_q8n8ie.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730957813/noah_qcbmz4.jpg" oncontextmenu="return false;">
    </div>`
});
miscBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.add('bold'); designBtn.classList.remove('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959207/pic_-58_ygv0nv.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959207/pic_-59_vrx8js.jpg" oncontextmenu="return false;">
    </div>
    <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959206/paracasrooftop_ou4mvl.jpg" oncontextmenu="return false;">`
});
designBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.add('bold'); productBtn.classList.remove('bold');
    javaDiv.innerHTML = 
    `<div class="row cust6">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730958315/ONE_frminv_qiuzfe.jpg" oncontextmenu="return false;">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730958316/ikigai_a37ev0.jpg" oncontextmenu="return false;">
    </div>
    <div class="row vert">
        <img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730959055/chair_poster_subrf3.jpg" oncontextmenu="return false;">
        <img src="" oncontextmenu="return false;">
    </div>`
});
productBtn.addEventListener('click', () => {
    landscapeBtn.classList.remove('bold'); natureBtn.classList.remove('bold'); wildlifeBtn.classList.remove('bold'); lifestyleBtn.classList.remove('bold'); streetBtn.classList.remove('bold'); portraitBtn.classList.remove('bold'); miscBtn.classList.remove('bold'); designBtn.classList.remove('bold'); productBtn.classList.add('bold');
    javaDiv.innerHTML = 
    `<img src="https://res.cloudinary.com/da0eehdqv/image/upload/v1730961164/BikeTire_gchys7.jpg" oncontextmenu="return false;">`
});