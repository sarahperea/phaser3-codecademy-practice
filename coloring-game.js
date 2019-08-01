let gameState = {
  palette: [0xa7f66c, 0x844cc5, 0x66e2e2, 0x4c7df3, 0xffc836, 0xec32fc],
  selectedColor: 0x844cc5,
}

function create ()
{
  let pegasusShapes = getPegasusShapes(this);
  let staticShapes  = getPegasusStaticShapes(this); 
  for (let shape of pegasusShapes) {
    shape.smoothness = 25;
    shape.strokeColor = 0x000000;
    shape.isStroked = true;
    shape.setOrigin(0, 1);
    shape.lineWidth = 2
    
    /* make each shape interactive here */
    shape.setInteractive();
    /* add a pointerup handler here */
    shape.on('pointerup', function () {
      this.fillColor = gameState.selectedColor;
    })
  }

  // Setting up palette circles
  let paletteBox = this.add.rectangle(0, 475, 440, 75, 0x37c3be);
  paletteBox.setOrigin(0, 0)
  gameState.paletteCircles = []
  const spacing = 440 / gameState.palette.length;
  const translation = spacing / 2;

  for (let i = 0; i < gameState.palette.length; i++) {
    // Create each of the palette circles with one of the colors from the palette
    let color = gameState.palette[i];
    let paletteCircle = this.add.circle(translation + spacing * i, 515, 22, color);
    
    paletteCircle.strokeColor = 0x000000;
    paletteCircle.isStroked = true;
    paletteCircle.lineWidth = 2;
  }

}

function getPegasusShapes(scene) {
  return [body(scene), hindLeg(scene), rearLeg(scene), rearHoofRight(scene), rearHoofLeft(scene), frontHoofRight(scene), frontHoofLeft(scene), underWing(scene), wing(scene), 
tail(scene), hair(scene), mane(scene)]
}

function getPegasusStaticShapes(scene) {
  eye(scene) 
  nostril(scene)
}

const config = {
  type: Phaser.WEBGL,
  parent: 'phaser-game',
  backgroundColor: 0xffc836,
  width: 440,
  height: 550,
  scene: {
    create,
  }
};

const game = new Phaser.Game(config);

function body(scene) {
  let path = scene.add.path();
  path.moveTo(12.7257659,202.472652);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(12.7257659,202.472652), new Phaser.Math.Vector2(19.8214691,192.476558), new Phaser.Math.Vector2(31.4699066,182.212886), 
new Phaser.Math.Vector2(61.1847503,174.816402)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(61.1847503,174.816402), new Phaser.Math.Vector2(90.8995941,167.419917), new Phaser.Math.Vector2(110.469907,140.679683), 
new Phaser.Math.Vector2(114.938657,134.294917)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(114.938657,134.294917), new Phaser.Math.Vector2(119.407407,127.910152), new Phaser.Math.Vector2(122.036313,114.800777), 
new Phaser.Math.Vector2(125.460141,94.8261673)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(125.460141,94.8261673), new Phaser.Math.Vector2(128.883969,74.851558), new Phaser.Math.Vector2(139.014828,47.023433), 
new Phaser.Math.Vector2(158.712094,33.4902298)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(158.712094,33.4902298), new Phaser.Math.Vector2(171.843604,24.4680944), new Phaser.Math.Vector2(181.286964,19.6380163), 
new Phaser.Math.Vector2(187.042172,18.9999955)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(187.042172,18.9999955), new Phaser.Math.Vector2(189.783058,14.6132767), new Phaser.Math.Vector2(192.643084,11.3072871), 
new Phaser.Math.Vector2(195.62225,9.08202672)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(195.62225,9.08202672), new Phaser.Math.Vector2(200.091,5.74413609), new Phaser.Math.Vector2(206.137387,1.71190953), new 
Phaser.Math.Vector2(207.157895,0.441401719)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(207.157895,0.441401719), new Phaser.Math.Vector2(208.178403,-0.829106093), new 
Phaser.Math.Vector2(209.589535,0.914057969), new Phaser.Math.Vector2(208.883969,2.25292516)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(208.883969,2.25292516), new Phaser.Math.Vector2(208.178403,3.59179234), new Phaser.Math.Vector2(205.635922,7.96142125), 
new Phaser.Math.Vector2(204.840512,9.08202672)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(204.840512,9.08202672), new Phaser.Math.Vector2(204.045102,10.2026322), new Phaser.Math.Vector2(205.635922,13.9345703), 
new Phaser.Math.Vector2(196.707211,21.2607377)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(196.707211,21.2607377), new Phaser.Math.Vector2(200.845703,17.6943359), new Phaser.Math.Vector2(206.486996,13.0219681), 
new Phaser.Math.Vector2(210.28436,9.75194859)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(210.28436,9.75194859), new Phaser.Math.Vector2(214.081723,6.48192906), new Phaser.Math.Vector2(215.719418,3.31249547), 
new Phaser.Math.Vector2(217.888852,3.31249547)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(217.888852,3.31249547), new Phaser.Math.Vector2(220.058285,3.31249547), new Phaser.Math.Vector2(217.953305,11.6557572), 
new Phaser.Math.Vector2(216.855649,12.6601517)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(216.855649,12.6601517), new Phaser.Math.Vector2(215.757992,13.6645463), new Phaser.Math.Vector2(214.496274,18.844722), 
new Phaser.Math.Vector2(213.672055,20.0527298)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(213.672055,20.0527298), new Phaser.Math.Vector2(212.847836,21.2607377), new Phaser.Math.Vector2(211.503598,23.5595658), 
new Phaser.Math.Vector2(211.503598,23.5595658)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(211.503598,23.5595658), new Phaser.Math.Vector2(211.503598,23.5595658), new Phaser.Math.Vector2(215.357602,25.6235306), 
new Phaser.Math.Vector2(220.806332,35.7973588)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(220.806332,35.7973588), new Phaser.Math.Vector2(226.255063,45.9711869), new Phaser.Math.Vector2(238.089047,68.4531205), 
new Phaser.Math.Vector2(240.456723,72.5585892)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(240.456723,72.5585892), new Phaser.Math.Vector2(242.824399,76.664058), new Phaser.Math.Vector2(244.558285,80.2446244), 
new Phaser.Math.Vector2(244.558285,83.7519486)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(244.558285,83.7519486), new Phaser.Math.Vector2(244.558285,87.2592728), new Phaser.Math.Vector2(241.979184,92.726558), 
new Phaser.Math.Vector2(237.606137,93.7763627)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(237.606137,93.7763627), new Phaser.Math.Vector2(233.23309,94.8261673), new Phaser.Math.Vector2(231.259457,93.1518509), 
new Phaser.Math.Vector2(230.096371,91.1860306)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(230.096371,91.1860306), new Phaser.Math.Vector2(229.320981,89.8754838), new Phaser.Math.Vector2(228.384295,87.9531205), 
new Phaser.Math.Vector2(227.286313,85.4189408)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(227.286313,85.4189408), new Phaser.Math.Vector2(229.559425,89.3225866), new Phaser.Math.Vector2(230.496111,91.6914017), 
new Phaser.Math.Vector2(230.096371,92.5253861)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(230.096371,92.5253861), new Phaser.Math.Vector2(229.496762,93.7763627), new Phaser.Math.Vector2(226.086606,95.3383744), 
new Phaser.Math.Vector2(223.446469,92.5253861)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(223.446469,92.5253861), new Phaser.Math.Vector2(220.806332,89.7123978), new Phaser.Math.Vector2(222.901547,83.3466752), 
new Phaser.Math.Vector2(219.010922,81.7280228)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(219.010922,81.7280228), new Phaser.Math.Vector2(215.120297,80.1093705), new Phaser.Math.Vector2(207.948422,73.6957963), 
new Phaser.Math.Vector2(202.875668,73.6957963)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(202.875668,73.6957963), new Phaser.Math.Vector2(199.493832,73.6957963), new Phaser.Math.Vector2(195.567726,72.8694616), 
new Phaser.Math.Vector2(191.097348,71.2167923)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(191.097348,71.2167923), new Phaser.Math.Vector2(187.292986,79.9108028), new Phaser.Math.Vector2(185.941261,87.7805944), 
new Phaser.Math.Vector2(187.042172,94.8261673)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(187.042172,94.8261673), new Phaser.Math.Vector2(188.693539,105.394527), new Phaser.Math.Vector2(193.131528,118.161617), 
new Phaser.Math.Vector2(198.98602,123.573726)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(198.98602,123.573726), new Phaser.Math.Vector2(204.840512,128.985835), new Phaser.Math.Vector2(213.700864,139.761714), 
new Phaser.Math.Vector2(212.602231,151.19189)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(212.602231,151.19189), new Phaser.Math.Vector2(227.286313,140.70312), new Phaser.Math.Vector2(245.28436,130.804195), 
new Phaser.Math.Vector2(248.85809,130.804195)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(248.85809,130.804195), new Phaser.Math.Vector2(252.431821,130.804195), new Phaser.Math.Vector2(262.727231,130.976558), 
new Phaser.Math.Vector2(264.803891,134.294917)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(264.803891,134.294917), new Phaser.Math.Vector2(266.880551,137.613277), new Phaser.Math.Vector2(276.103696,153.173824), 
new Phaser.Math.Vector2(281.73016,157.059566)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(281.73016,157.059566), new Phaser.Math.Vector2(287.356625,160.945308), new Phaser.Math.Vector2(297.0827,170.526851), 
new Phaser.Math.Vector2(297.0827,173.161617)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(297.0827,173.161617), new Phaser.Math.Vector2(297.0827,175.796382), new Phaser.Math.Vector2(296.63934,179.923335), new 
Phaser.Math.Vector2(295.519223,181.048824)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(295.519223,181.048824), new Phaser.Math.Vector2(294.399106,182.174312), new Phaser.Math.Vector2(293.955746,187.955074), 
new Phaser.Math.Vector2(295.519223,189.549312)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(295.519223,189.549312), new Phaser.Math.Vector2(297.0827,191.14355), new Phaser.Math.Vector2(296.225766,195.073238), 
new Phaser.Math.Vector2(295.519223,196.028316)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(295.519223,196.028316), new Phaser.Math.Vector2(294.81268,196.983394), new Phaser.Math.Vector2(290.584653,210.163081), 
new Phaser.Math.Vector2(286.996762,210.163081)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(286.996762,210.163081), new Phaser.Math.Vector2(283.408871,210.163081), new Phaser.Math.Vector2(277.19891,194.252437), 
new Phaser.Math.Vector2(277.19891,192.404292)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(277.19891,192.404292), new Phaser.Math.Vector2(277.19891,190.556148), new Phaser.Math.Vector2(282.500668,187.565425), 
new Phaser.Math.Vector2(282.500668,185.869136)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(282.500668,185.869136), new Phaser.Math.Vector2(282.500668,184.172847), new Phaser.Math.Vector2(283.379086,180.892574), 
new Phaser.Math.Vector2(281.73016,180.083492)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(281.73016,180.083492), new Phaser.Math.Vector2(280.081235,179.27441), new Phaser.Math.Vector2(280.290219,176.049312), 
new Phaser.Math.Vector2(277.19891,171.139644)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(277.19891,171.139644), new Phaser.Math.Vector2(274.107602,166.229976), new Phaser.Math.Vector2(263.813657,154.799312), 
new Phaser.Math.Vector2(260.861996,152.995601)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(260.861996,152.995601), new Phaser.Math.Vector2(257.910336,151.19189), new Phaser.Math.Vector2(250.105649,151.632808), 
new Phaser.Math.Vector2(246.531918,154.346187)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(246.531918,154.346187), new Phaser.Math.Vector2(242.958188,157.059566), new Phaser.Math.Vector2(223.723813,177.856929), 
new Phaser.Math.Vector2(220.806332,181.048824)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(220.806332,181.048824), new Phaser.Math.Vector2(217.888852,184.240718), new Phaser.Math.Vector2(214.303891,187.168453), 
new Phaser.Math.Vector2(207.157895,184.812007)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(207.157895,184.812007), new Phaser.Math.Vector2(200.939633,192.404292), new Phaser.Math.Vector2(193.442075,205.763179), 
new Phaser.Math.Vector2(168.09393,219.451656)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(168.09393,219.451656), new Phaser.Math.Vector2(142.745785,233.140132), new Phaser.Math.Vector2(109.782407,240.74316), 
new Phaser.Math.Vector2(81.4928558,246.666499)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(81.4928558,246.666499), new Phaser.Math.Vector2(89.2404144,257.661617), new Phaser.Math.Vector2(85.8097503,270.16357), 
new Phaser.Math.Vector2(79.6935394,276.811519)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(79.6935394,276.811519), new Phaser.Math.Vector2(73.5773284,283.459468), new Phaser.Math.Vector2(57.9630706,303.861812), 
new Phaser.Math.Vector2(55.8722503,306.525874)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(55.8722503,306.525874), new Phaser.Math.Vector2(53.78143,309.189937), new Phaser.Math.Vector2(47.9484222,317.898433), 
new Phaser.Math.Vector2(53.7404144,326.265132)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(53.7404144,326.265132), new Phaser.Math.Vector2(59.5324066,334.631831), new Phaser.Math.Vector2(75.6476409,351.606441), 
new Phaser.Math.Vector2(79.6935394,354.81982)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(79.6935394,354.81982), new Phaser.Math.Vector2(83.7394378,358.033199), new Phaser.Math.Vector2(100.230649,366.673824), 
new Phaser.Math.Vector2(101.634457,368.825191)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(101.634457,368.825191), new Phaser.Math.Vector2(103.038266,370.976558), new Phaser.Math.Vector2(109.765317,380.304683), 
new Phaser.Math.Vector2(107.209164,382.027828)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(107.209164,382.027828), new Phaser.Math.Vector2(104.653012,383.750972), new Phaser.Math.Vector2(98.3009612,386.318843), 
new Phaser.Math.Vector2(88.9972503,385.669429)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(88.9972503,385.669429), new Phaser.Math.Vector2(79.6935394,385.020015), new Phaser.Math.Vector2(76.8659027,384.180171), 
new Phaser.Math.Vector2(76.8659027,377.687984)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(76.8659027,377.687984), new Phaser.Math.Vector2(76.8659027,371.195796), new Phaser.Math.Vector2(75.425473,370.857417), 
new Phaser.Math.Vector2(70.0529144,370.857417)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(70.0529144,370.857417), new Phaser.Math.Vector2(64.6803558,370.857417), new Phaser.Math.Vector2(65.5172698,370.686031), 
new Phaser.Math.Vector2(59.3287933,362.752925)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(59.3287933,362.752925), new Phaser.Math.Vector2(53.1403167,354.81982), new Phaser.Math.Vector2(31.2140472,330.815913), 
new Phaser.Math.Vector2(28.4904144,328.540523)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(28.4904144,328.540523), new Phaser.Math.Vector2(25.7667816,326.265132), new Phaser.Math.Vector2(21.6881683,323.615718), 
new Phaser.Math.Vector2(25.6334808,317.611324)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(25.6334808,317.611324), new Phaser.Math.Vector2(29.5787933,311.606929), new Phaser.Math.Vector2(35.7653167,301.398433), 
new Phaser.Math.Vector2(35.7653167,296.53564)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(35.7653167,296.53564), new Phaser.Math.Vector2(35.7653167,291.672847), new Phaser.Math.Vector2(35.0353362,288.286617), 
new Phaser.Math.Vector2(27.3097503,285.285152)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(27.3097503,285.285152), new Phaser.Math.Vector2(19.5841644,282.283687), new Phaser.Math.Vector2(3.9923675,272.367183), 
new Phaser.Math.Vector2(0.737972965,254.193355)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(0.737972965,254.193355), new Phaser.Math.Vector2(-2.51642157,236.019527), new 
Phaser.Math.Vector2(5.63006281,212.468745), new Phaser.Math.Vector2(12.7257659,202.472652)));
  path.closePath();
  return scene.add.curve(111.737972965, 423.669429, path, 0x9ec32fc);
}

function hindLeg(scene) {
  let path = scene.add.path();
  path.moveTo(199.161133,195);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(199.161133,195), new Phaser.Math.Vector2(199.941081,196.555339), new Phaser.Math.Vector2(200.838216,197.816406), new 
Phaser.Math.Vector2(201.852539,198.783203)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(201.852539,198.783203), new Phaser.Math.Vector2(203.374023,200.233398), new Phaser.Math.Vector2(206.208008,200.574219), 
new Phaser.Math.Vector2(214.037109,196.891602)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(214.037109,196.891602), new Phaser.Math.Vector2(221.866211,193.208984), new Phaser.Math.Vector2(236.348633,187.446289), 
new Phaser.Math.Vector2(241.921875,185.635742)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(241.921875,185.635742), new Phaser.Math.Vector2(247.495117,183.825195), new Phaser.Math.Vector2(249.123047,182.573242), 
new Phaser.Math.Vector2(252.806641,184.104492)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(252.806641,184.104492), new Phaser.Math.Vector2(256.490234,185.635742), new Phaser.Math.Vector2(261.351563,189.885742), 
new Phaser.Math.Vector2(262.701172,195)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(262.701172,195), new Phaser.Math.Vector2(264.050781,200.114258), new Phaser.Math.Vector2(267.391602,204.649414), new 
Phaser.Math.Vector2(267.391602,208.026367)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(267.391602,208.026367), new Phaser.Math.Vector2(267.391602,211.40332), new Phaser.Math.Vector2(267.391602,217.574219), 
new Phaser.Math.Vector2(267.391602,218.96582)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(267.391602,218.96582), new Phaser.Math.Vector2(267.391602,220.357422), new Phaser.Math.Vector2(267.839844,223.058594), 
new Phaser.Math.Vector2(269.362305,223.058594)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(269.362305,223.058594), new Phaser.Math.Vector2(270.884766,223.058594), new Phaser.Math.Vector2(269.449707,226.171875), 
new Phaser.Math.Vector2(265.73291,226.563232)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(265.73291,226.563232), new Phaser.Math.Vector2(262.016113,226.95459), new Phaser.Math.Vector2(261.074463,227.171143), 
new Phaser.Math.Vector2(261.074463,230.570801)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(261.074463,230.570801), new Phaser.Math.Vector2(261.074463,233.970459), new Phaser.Math.Vector2(261.68042,244.128418), 
new Phaser.Math.Vector2(261.68042,245.316895)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(261.68042,245.316895), new Phaser.Math.Vector2(261.68042,246.505371), new Phaser.Math.Vector2(262.987549,248.492676), 
new Phaser.Math.Vector2(265.73291,246.213623)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(265.73291,246.213623), new Phaser.Math.Vector2(268.478271,243.93457), new Phaser.Math.Vector2(274.912109,239.135986), 
new Phaser.Math.Vector2(274.912109,238.247803)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(274.912109,238.247803), new Phaser.Math.Vector2(274.912109,237.359619), new Phaser.Math.Vector2(274.867432,236.580566), 
new Phaser.Math.Vector2(275.458496,235.453125)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(275.458496,235.453125), new Phaser.Math.Vector2(276.049561,234.325684), new Phaser.Math.Vector2(282.688965,226.215576), 
new Phaser.Math.Vector2(283.573242,224.292236)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(283.573242,224.292236), new Phaser.Math.Vector2(284.45752,222.368896), new Phaser.Math.Vector2(284.998535,216.354736), 
new Phaser.Math.Vector2(282.031494,210.590332)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(282.031494,210.590332), new Phaser.Math.Vector2(279.064453,204.825928), new Phaser.Math.Vector2(271.856689,192.713867), 
new Phaser.Math.Vector2(271.856689,187.503662)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(271.856689,187.503662), new Phaser.Math.Vector2(271.856689,182.293457), new Phaser.Math.Vector2(273.519043,175.251953), 
new Phaser.Math.Vector2(268.110107,170.593018)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(268.110107,170.593018), new Phaser.Math.Vector2(262.701172,165.934082), new Phaser.Math.Vector2(259.624268,163.876709), 
new Phaser.Math.Vector2(251.342773,163.876709)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(251.342773,163.876709), new Phaser.Math.Vector2(245.821777,163.876709), new Phaser.Math.Vector2(240.112223,164.886556), 
new Phaser.Math.Vector2(234.214111,166.90625)));
  path.lineTo(234.214111,166.90625, 220.522461,181.263916);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(220.522461,181.263916), new Phaser.Math.Vector2(217.91862,184.472738), new Phaser.Math.Vector2(215.210042,185.930013), 
new Phaser.Math.Vector2(212.396729,185.635742)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(212.396729,185.635742), new Phaser.Math.Vector2(208.176758,185.194336), new Phaser.Math.Vector2(207.572266,184.559326), 
new Phaser.Math.Vector2(204.712402,188.108154)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(204.712402,188.108154), new Phaser.Math.Vector2(202.805827,190.47404), new Phaser.Math.Vector2(200.955404,192.771322), 
new Phaser.Math.Vector2(199.161133,195)));
  path.closePath();
  return scene.add.curve(310.161133, 284.213623, path, 0xec32fc);
}

function rearLeg(scene) {
  let path = scene.add.path();
  path.moveTo(16.4951172,279.325195);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(16.4951172,279.325195), new Phaser.Math.Vector2(18.4664714,290.870117), new Phaser.Math.Vector2(17.3818359,299.122721), 
new Phaser.Math.Vector2(13.2412109,304.083008)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(13.2412109,304.083008), new Phaser.Math.Vector2(7.03027344,311.523438), new Phaser.Math.Vector2(7.21484375,312.300781), 
new Phaser.Math.Vector2(5.640625,315.092773)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(5.640625,315.092773), new Phaser.Math.Vector2(4.06640625,317.884766), new Phaser.Math.Vector2(1.31347656,321.28125), 
new Phaser.Math.Vector2(8.90429687,330.633789)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(8.90429687,330.633789), new Phaser.Math.Vector2(16.4951172,339.986328), new Phaser.Math.Vector2(28.3974609,351.80957), 
new Phaser.Math.Vector2(31.5214844,355.652344)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(31.5214844,355.652344), new Phaser.Math.Vector2(34.6455078,359.495117), new Phaser.Math.Vector2(33.4677734,363.206055), 
new Phaser.Math.Vector2(38.640625,365.551758)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(38.640625,365.551758), new Phaser.Math.Vector2(43.8134766,367.897461), new Phaser.Math.Vector2(50.1777344,367.56543), 
new Phaser.Math.Vector2(51.9960938,369.775391)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(51.9960938,369.775391), new Phaser.Math.Vector2(53.8144531,371.985352), new Phaser.Math.Vector2(55.1064453,376.724609), 
new Phaser.Math.Vector2(57.2617188,378.837891)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(57.2617188,378.837891), new Phaser.Math.Vector2(58.6985677,380.246745), new Phaser.Math.Vector2(65.2669271,380.788737), 
new Phaser.Math.Vector2(76.9667969,380.463867)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(76.9667969,380.463867), new Phaser.Math.Vector2(76.9667969,378.608073), new Phaser.Math.Vector2(76.9667969,376.972493), 
new Phaser.Math.Vector2(76.9667969,375.557129)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(76.9667969,375.557129), new Phaser.Math.Vector2(76.9667969,373.434082), new Phaser.Math.Vector2(76.5161133,370.902832), 
new Phaser.Math.Vector2(71.1303711,370.902832)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(71.1303711,370.902832), new Phaser.Math.Vector2(65.7446289,370.902832), new Phaser.Math.Vector2(63.8164062,367.615234), 
new Phaser.Math.Vector2(59.8208008,362.93457)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(59.8208008,362.93457), new Phaser.Math.Vector2(55.8251953,358.253906), new Phaser.Math.Vector2(43.2788086,343.771973), 
new Phaser.Math.Vector2(41.4052734,341.84375)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(41.4052734,341.84375), new Phaser.Math.Vector2(39.5317383,339.915527), new Phaser.Math.Vector2(24.328125,325.647949), 
new Phaser.Math.Vector2(24.328125,324.207031)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(24.328125,324.207031), new Phaser.Math.Vector2(24.328125,322.766113), new Phaser.Math.Vector2(24.1044922,320.047363), 
new Phaser.Math.Vector2(27.4428711,315.092773)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(27.4428711,315.092773), new Phaser.Math.Vector2(30.78125,310.138184), new Phaser.Math.Vector2(34.3676758,303.193848), 
new Phaser.Math.Vector2(35.184082,300.951172)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(35.184082,300.951172), new Phaser.Math.Vector2(36.0004883,298.708496), new Phaser.Math.Vector2(37.3613281,290.61084), 
new Phaser.Math.Vector2(31.5214844,287.563965)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(31.5214844,287.563965), new Phaser.Math.Vector2(27.6282552,285.532715), new Phaser.Math.Vector2(22.6194661,282.786458), 
new Phaser.Math.Vector2(16.4951172,279.325195)));
  path.closePath();
  return scene.add.curve(116.640625, 418.463867, path, 0xec32fc);
}

function rearHoofRight(scene) {
  let path = scene.add.path();
  path.moveTo(45.6344573,183.825191);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(45.6344573,183.825191), new Phaser.Math.Vector2(47.0382659,185.976558), new Phaser.Math.Vector2(53.7653167,195.304683), 
new Phaser.Math.Vector2(51.2091644,197.027828)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(51.2091644,197.027828), new Phaser.Math.Vector2(48.653012,198.750972), new Phaser.Math.Vector2(42.3009612,201.318843), 
new Phaser.Math.Vector2(32.9972503,200.669429)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(32.9972503,200.669429), new Phaser.Math.Vector2(23.6935394,200.020015), new Phaser.Math.Vector2(20.8659027,199.180171), 
new Phaser.Math.Vector2(20.8659027,192.687984)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(20.8659027,192.687984), new Phaser.Math.Vector2(20.8659027,186.195796), new Phaser.Math.Vector2(44.2306487,181.673824), 
new Phaser.Math.Vector2(45.6344573,183.825191)));
  path.closePath();
  return scene.add.curve(187.8659027, 423.66942900000004, path, 0x66e2e2);
}

function frontHoofLeft(scene) {
  let path = scene.add.path();
  path.moveTo(209.73291,41.5632324);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(209.73291,41.5632324), new Phaser.Math.Vector2(206.016113,41.9545898), new Phaser.Math.Vector2(205.074463,42.1711426), 
new Phaser.Math.Vector2(205.074463,45.5708008)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(205.074463,45.5708008), new Phaser.Math.Vector2(205.074463,48.970459), new Phaser.Math.Vector2(205.68042,59.128418), 
new Phaser.Math.Vector2(205.68042,60.3168945)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(205.68042,60.3168945), new Phaser.Math.Vector2(205.68042,61.5053711), new Phaser.Math.Vector2(206.987549,63.4926758), 
new Phaser.Math.Vector2(209.73291,61.213623)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(209.73291,61.213623), new Phaser.Math.Vector2(212.478271,58.9345703), new Phaser.Math.Vector2(218.912109,54.1359863), 
new Phaser.Math.Vector2(218.912109,53.2478027)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(218.912109,53.2478027), new Phaser.Math.Vector2(218.912109,52.3596191), new Phaser.Math.Vector2(213.449707,41.171875), 
new Phaser.Math.Vector2(209.73291,41.5632324)));
  path.closePath();
  return scene.add.curve(372.07446300000004, 284.213623, path, 0x66e2e2);
}

function rearHoofLeft(scene) {
  let path = scene.add.path();
  path.moveTo(1.26171875,193.837891);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(1.26171875,193.837891), new Phaser.Math.Vector2(2.69856771,195.246745), new Phaser.Math.Vector2(9.26692708,195.788737), 
new Phaser.Math.Vector2(20.9667969,195.463867)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(20.9667969,195.463867), new Phaser.Math.Vector2(20.9667969,193.608073), new Phaser.Math.Vector2(20.9667969,191.972493), 
new Phaser.Math.Vector2(20.9667969,190.557129)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(20.9667969,190.557129), new Phaser.Math.Vector2(20.9667969,188.434082), new Phaser.Math.Vector2(20.5161133,185.902832), 
new Phaser.Math.Vector2(15.1303711,185.902832)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(15.1303711,185.902832), new Phaser.Math.Vector2(9.74462891,185.902832), new 
Phaser.Math.Vector2(-0.893554687,191.724609), new Phaser.Math.Vector2(1.26171875,193.837891)));
  path.closePath();
  return scene.add.curve(168.26171875, 418.463867, path, 0x66e2e2);
}

function frontHoofRight(scene) {
  let path = scene.add.path();
  path.moveTo(239.519223,11.0283158);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(239.519223,11.0283158), new Phaser.Math.Vector2(238.81268,11.9833939), new Phaser.Math.Vector2(234.584653,25.1630814), 
new Phaser.Math.Vector2(230.996762,25.1630814)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(230.996762,25.1630814), new Phaser.Math.Vector2(227.408871,25.1630814), new Phaser.Math.Vector2(221.19891,9.25243688), 
new Phaser.Math.Vector2(221.19891,7.40429234)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(221.19891,7.40429234), new Phaser.Math.Vector2(221.19891,5.55614781), new Phaser.Math.Vector2(226.500668,2.56542516), 
new Phaser.Math.Vector2(226.500668,0.869136094)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(226.500668,0.869136094), new Phaser.Math.Vector2(226.500668,-0.827152968), new 
Phaser.Math.Vector2(240.225766,10.0732377), new Phaser.Math.Vector2(239.519223,11.0283158)));
  path.closePath();
  return scene.add.curve(388.19891, 248.1630814, path, 0x66e2e2);
}

function underWing(scene) {
  let path = scene.add.path();

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(189.000517,199), new Phaser.Math.Vector2(185.910673,199.190668), new Phaser.Math.Vector2(182.139514,200.123427), new 
Phaser.Math.Vector2(177.68704,201.798275)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(177.68704,201.798275), new Phaser.Math.Vector2(171.00833,204.310547), new Phaser.Math.Vector2(167.805205,205.61084), 
new Phaser.Math.Vector2(169.406767,208.900146)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(169.406767,208.900146), new Phaser.Math.Vector2(171.00833,212.189453), new Phaser.Math.Vector2(178.885283,209.847168), 
new Phaser.Math.Vector2(185.245634,207.900146)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(185.245634,207.900146), new Phaser.Math.Vector2(189.485869,206.602132), new Phaser.Math.Vector2(194.43704,205.309896), 
new Phaser.Math.Vector2(200.09915,204.023438)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(199.703613,204), new Phaser.Math.Vector2(195.17041,205.251139), new Phaser.Math.Vector2(190.804199,206.285786), new 
Phaser.Math.Vector2(186.604981,207.103939)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(186.604981,207.103939), new Phaser.Math.Vector2(180.306152,208.331169), new Phaser.Math.Vector2(179.062988,212.676758), 
new Phaser.Math.Vector2(180.590332,215.575195)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(180.590332,215.575195), new Phaser.Math.Vector2(181.608561,217.507487), new Phaser.Math.Vector2(190.681804,215.274658), 
new Phaser.Math.Vector2(207.810059,208.876709)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(193.137074,217.645199), new Phaser.Math.Vector2(194.13635,220.035828), new Phaser.Math.Vector2(199.163318,221.573188), 
new Phaser.Math.Vector2(204.113166,218.909424)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(204.113166,218.909424), new Phaser.Math.Vector2(209.063015,216.245659), new Phaser.Math.Vector2(212.208421,215.633042), 
new Phaser.Math.Vector2(218.01844,213.289307)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(218.01844,213.289307), new Phaser.Math.Vector2(213.440315,211.443604), new Phaser.Math.Vector2(209.841356,210.013835), 
new Phaser.Math.Vector2(207.221565,209)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(176.865094,194), new Phaser.Math.Vector2(173.564964,194.191406), new Phaser.Math.Vector2(169.528506,194.983724), new 
Phaser.Math.Vector2(164.755719,196.376953)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(164.755719,196.376953), new Phaser.Math.Vector2(157.59654,198.466797), new Phaser.Math.Vector2(155.925641,201.395508), 
new Phaser.Math.Vector2(157.59654,203.400391)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(157.59654,203.400391), new Phaser.Math.Vector2(159.267438,205.405273), new Phaser.Math.Vector2(166.837751,204.003776), 
new Phaser.Math.Vector2(172.351422,202.175228)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(172.351422,202.175228), new Phaser.Math.Vector2(176.027204,200.956196), new Phaser.Math.Vector2(181.30292,200.023437), 
new Phaser.Math.Vector2(188.178571,199.376953)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(166.256179,187), new Phaser.Math.Vector2(159.290684,188.08724), new Phaser.Math.Vector2(154.67838,189.14681), new 
Phaser.Math.Vector2(152.419265,190.178711)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(152.419265,190.178711), new Phaser.Math.Vector2(149.030593,191.726562), new Phaser.Math.Vector2(144.248686,194.508789), 
new Phaser.Math.Vector2(145.418288,197.084961)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(145.418288,197.084961), new Phaser.Math.Vector2(146.587891,199.661133), new Phaser.Math.Vector2(150.90071,199.661133), 
new Phaser.Math.Vector2(157.137038,197.555664)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(157.137038,197.555664), new Phaser.Math.Vector2(161.294591,196.152018), new Phaser.Math.Vector2(167.717442,194.693034), 
new Phaser.Math.Vector2(176.405593,193.178711)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(154.324523,180), new Phaser.Math.Vector2(146.817361,181.954145), new Phaser.Math.Vector2(142.06378,183.481999), new 
Phaser.Math.Vector2(140.06378,184.583561)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(140.06378,184.583561), new Phaser.Math.Vector2(137.06378,186.235905), new Phaser.Math.Vector2(133.805968,187.644108), 
new Phaser.Math.Vector2(135.434874,190.762272)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(135.434874,190.762272), new Phaser.Math.Vector2(137.06378,193.880436), new Phaser.Math.Vector2(143.027648,192.28571), 
new Phaser.Math.Vector2(148.676085,190.161686)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(148.676085,190.161686), new Phaser.Math.Vector2(152.44171,188.745671), new Phaser.Math.Vector2(158.183572,187.552962), 
new Phaser.Math.Vector2(165.901671,186.583561)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(143.9687,172), new Phaser.Math.Vector2(133.449168,174.52372), new Phaser.Math.Vector2(127.17508,176.356076), new 
Phaser.Math.Vector2(125.146434,177.49707)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(125.146434,177.49707), new Phaser.Math.Vector2(122.103465,179.208561), new Phaser.Math.Vector2(118.783153,181.020085), 
new Phaser.Math.Vector2(120.443309,184.080632)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(120.443309,184.080632), new Phaser.Math.Vector2(122.103465,187.141178), new Phaser.Math.Vector2(129.514598,186.420475), 
new Phaser.Math.Vector2(133.811473,185.080632)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(133.811473,185.080632), new Phaser.Math.Vector2(136.676056,184.187402), new Phaser.Math.Vector2(143.482046,182.326215), 
new Phaser.Math.Vector2(154.229442,179.49707)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(134.165846,164), new Phaser.Math.Vector2(123.457513,166.794922), new Phaser.Math.Vector2(116.452305,168.808919), new 
Phaser.Math.Vector2(113.150221,170.041992)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(113.150221,170.041992), new Phaser.Math.Vector2(108.197096,171.891602), new Phaser.Math.Vector2(105.933424,175.254002), 
new Phaser.Math.Vector2(107.481276,177.539063)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(107.481276,177.539063), new Phaser.Math.Vector2(109.029128,179.824123), new Phaser.Math.Vector2(117.154865,179.824123), 
new Phaser.Math.Vector2(119.797682,178.539063)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(119.797682,178.539063), new Phaser.Math.Vector2(120.293252,178.298094), new Phaser.Math.Vector2(128.468382,176.132403), 
new Phaser.Math.Vector2(144.323073,172.041992)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(125.53698,155), new Phaser.Math.Vector2(120.614128,157.814453), new Phaser.Math.Vector2(106.196159,159.512142), new 
Phaser.Math.Vector2(101.324089,161.222103)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(101.324089,161.222103), new Phaser.Math.Vector2(96.4520187,162.932064), new Phaser.Math.Vector2(91.4520187,164.454948), 
new Phaser.Math.Vector2(93.4520187,168.017025)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(93.4520187,168.017025), new Phaser.Math.Vector2(95.4520187,171.579102), new Phaser.Math.Vector2(101.243034,171.716243), 
new Phaser.Math.Vector2(109.4403,169.866634)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(109.4403,169.866634), new Phaser.Math.Vector2(114.905144,168.633561), new Phaser.Math.Vector2(123.15905,166.619564), 
new Phaser.Math.Vector2(134.202019,163.824642)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(134.202019,163.824642), new Phaser.Math.Vector2(130.4403,160.071105), new Phaser.Math.Vector2(127.551954,157.129557), 
new Phaser.Math.Vector2(125.53698,155)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(116.753517,144), new Phaser.Math.Vector2(109.591408,145.631413), new Phaser.Math.Vector2(95.499611,149.165462), new 
Phaser.Math.Vector2(90.3794938,150.502376)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(90.3794938,150.502376), new Phaser.Math.Vector2(85.2593766,151.83929), new Phaser.Math.Vector2(76.6167985,154.987728), 
new Phaser.Math.Vector2(78.1880875,159.544922)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(78.1880875,159.544922), new Phaser.Math.Vector2(79.7593766,164.102116), new Phaser.Math.Vector2(86.7886735,164.003353), 
new Phaser.Math.Vector2(91.8834,162.699642)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(91.8834,162.699642), new Phaser.Math.Vector2(96.9781266,161.395931), new Phaser.Math.Vector2(120.202736,156.569336), 
new Phaser.Math.Vector2(126.063088,154.875)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(126.063088,154.875), new Phaser.Math.Vector2(123.253029,151.155762), new Phaser.Math.Vector2(120.343849,148.214844), 
new Phaser.Math.Vector2(116.753517,144)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(107.014704,130), new Phaser.Math.Vector2(94.3433845,134.541928), new Phaser.Math.Vector2(56.533259,137.495117), new 
Phaser.Math.Vector2(58.0440012,143.916016)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(58.0440012,143.916016), new Phaser.Math.Vector2(59.5547433,150.336914), new Phaser.Math.Vector2(68.1523996,149), new 
Phaser.Math.Vector2(72.2393137,149)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(72.2393137,149), new Phaser.Math.Vector2(76.3262277,149), new Phaser.Math.Vector2(107.83697,142.497624), new 
Phaser.Math.Vector2(117.4024,142.497624)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(117.4024,142.497624), new Phaser.Math.Vector2(114.669001,139.557778), new Phaser.Math.Vector2(110.24029,134.147038), 
new Phaser.Math.Vector2(107.014704,130)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(101.921875,104.468652), new Phaser.Math.Vector2(88.4609375,100.753255), new Phaser.Math.Vector2(58.046875,98.602441), 
new Phaser.Math.Vector2(49.2255859,98.602441)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(49.2255859,98.602441), new Phaser.Math.Vector2(40.4042969,98.602441), new Phaser.Math.Vector2(25,95.9491207), new 
Phaser.Math.Vector2(25,101.779199)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(25,101.779199), new Phaser.Math.Vector2(25,107.609277), new Phaser.Math.Vector2(31.8095703,109.914388), new 
Phaser.Math.Vector2(44.6240234,112.0472)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(44.6240234,112.0472), new Phaser.Math.Vector2(57.4384766,114.180013), new Phaser.Math.Vector2(106.201172,118.097656), 
new Phaser.Math.Vector2(111,118.097656)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(101.587891,116.419824), new Phaser.Math.Vector2(106.673828,118.733822), new Phaser.Math.Vector2(60.7578125,118.733822), 
new Phaser.Math.Vector2(55.0595703,118.733822)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(55.0595703,118.733822), new Phaser.Math.Vector2(49.3613281,118.733822), new Phaser.Math.Vector2(35,118.441276), new 
Phaser.Math.Vector2(35,123.840267)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(35,123.840267), new Phaser.Math.Vector2(35,129.239258), new Phaser.Math.Vector2(46.6777344,130.585384), new 
Phaser.Math.Vector2(52.3046875,130.585384)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(52.3046875,130.585384), new Phaser.Math.Vector2(57.9316406,130.585384), new Phaser.Math.Vector2(96.5224609,134.224056), 
new Phaser.Math.Vector2(106.673828,130.585384)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(106.673828,130.585384), new Phaser.Math.Vector2(103.569336,125.870605), new Phaser.Math.Vector2(103.429199,120.599511), 
new Phaser.Math.Vector2(101.587891,116.419824)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(94.5341797,81.5419922), new Phaser.Math.Vector2(57.7783203,73.8437688), new Phaser.Math.Vector2(36.6513672,69.4080685), 
new Phaser.Math.Vector2(31.1533203,68.2348914)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(31.1533203,68.2348914), new Phaser.Math.Vector2(22.90625,66.4751258), new Phaser.Math.Vector2(4,61.4229448), new 
Phaser.Math.Vector2(4,69.2348914)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(4,69.2348914), new Phaser.Math.Vector2(4,77.046838), new Phaser.Math.Vector2(15.1025391,78.7309852), new 
Phaser.Math.Vector2(28.2978516,83.188993)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(28.2978516,83.188993), new Phaser.Math.Vector2(41.4931641,87.6470008), new Phaser.Math.Vector2(93.8710938,102.525484), 
new Phaser.Math.Vector2(101.168945,104.077242)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(101.168945,104.077242), new Phaser.Math.Vector2(98.7184245,97.4281531), new Phaser.Math.Vector2(96.5068359,89.9164033), 
new Phaser.Math.Vector2(94.5341797,81.5419922)));

  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(90.3328948,61.6634449), new Phaser.Math.Vector2(51.0237254,47.0215179), new Phaser.Math.Vector2(28.6233724,38.6383798), 
new Phaser.Math.Vector2(23.1318359,36.5140309)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(23.1318359,36.5140309), new Phaser.Math.Vector2(14.8945312,33.3275074), new 
Phaser.Math.Vector2(7.00392787e-16,26.655079), new Phaser.Math.Vector2(0,35.1414072)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(0,35.1414072), new Phaser.Math.Vector2(0,40.7989593), new Phaser.Math.Vector2(31.3805339,56.6134124), new 
Phaser.Math.Vector2(94.1416016,82.5847665)));

  let curve = scene.add.curve(-7, 195.24752, path, 0x844cc5);
  curve.angle = 7
  return curve;
}

function wing(scene) {
  let path = scene.add.path();
  path.moveTo(123.621094,144);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(123.621094,144), new Phaser.Math.Vector2(127.242188,144), new Phaser.Math.Vector2(110.248304,143.664055), new 
Phaser.Math.Vector2(113.277344,150.656898)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(113.277344,150.656898), new Phaser.Math.Vector2(116.306383,157.649741), new Phaser.Math.Vector2(131.657227,154), new 
Phaser.Math.Vector2(135,154)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(135,154), new Phaser.Math.Vector2(138.342773,154), new Phaser.Math.Vector2(119.829102,154.249023), new 
Phaser.Math.Vector2(123.621094,160.886719)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(123.621094,160.886719), new Phaser.Math.Vector2(127.413086,167.524414), new Phaser.Math.Vector2(138.444336,163.478194), 
new Phaser.Math.Vector2(144,162.478194)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(144,162.478194), new Phaser.Math.Vector2(144.527478,162.383249), new Phaser.Math.Vector2(129.556381,163.556641), new 
Phaser.Math.Vector2(134.202019,169.5625)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(134.202019,169.5625), new Phaser.Math.Vector2(138.847656,175.568359), new Phaser.Math.Vector2(146.740234,170.738281), 
new Phaser.Math.Vector2(150.707031,170)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(150.707031,170), new Phaser.Math.Vector2(154.673828,169.261719), new Phaser.Math.Vector2(141.087552,170.738281), new 
Phaser.Math.Vector2(144.323073,177.056641)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(144.323073,177.056641), new Phaser.Math.Vector2(147.558594,183.375), new Phaser.Math.Vector2(161.038086,177.404471), 
new Phaser.Math.Vector2(161.038086,177.404471)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(161.038086,177.404471), new Phaser.Math.Vector2(161.653195,177.404471), new Phaser.Math.Vector2(151.458883,180.108398), 
new Phaser.Math.Vector2(154.229442,184.395508)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(154.229442,184.395508), new Phaser.Math.Vector2(157,188.682617), new Phaser.Math.Vector2(165.901671,184.395508), new 
Phaser.Math.Vector2(169,184.232453)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(169,184.232453), new Phaser.Math.Vector2(170.439571,184.156693), new Phaser.Math.Vector2(162.02411,187.61324), new 
Phaser.Math.Vector2(163.962891,190.80662)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(163.962891,190.80662), new Phaser.Math.Vector2(165.901671,194), new Phaser.Math.Vector2(176.405593,192.509705), new 
Phaser.Math.Vector2(179.704491,191.80662)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(179.704491,191.80662), new Phaser.Math.Vector2(183.003389,191.103535), new Phaser.Math.Vector2(174.961577,195.123291), 
new Phaser.Math.Vector2(176.405593,198)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(176.405593,198), new Phaser.Math.Vector2(177.849609,200.876709), new Phaser.Math.Vector2(186.729492,199.455508), new 
Phaser.Math.Vector2(191,197.455508)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(191,197.455508), new Phaser.Math.Vector2(192.117585,196.932111), new Phaser.Math.Vector2(181.239557,199.253911), new 
Phaser.Math.Vector2(185.178571,204.126956)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(185.178571,204.126956), new Phaser.Math.Vector2(189.117585,209), new Phaser.Math.Vector2(199.398146,202.607632), new 
Phaser.Math.Vector2(202.363281,204.381479)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(202.363281,204.381479), new Phaser.Math.Vector2(203.426002,205.017236), new Phaser.Math.Vector2(191.992479,204.406602), 
new Phaser.Math.Vector2(195.695312,209.685723)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(195.695312,209.685723), new Phaser.Math.Vector2(199.398146,214.964844), new Phaser.Math.Vector2(207.810059,209.685723), 
new Phaser.Math.Vector2(209.654855,209.685723)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(209.654855,209.685723), new Phaser.Math.Vector2(211.499651,209.685723), new Phaser.Math.Vector2(201.363281,211.518134), 
new Phaser.Math.Vector2(204.998047,214.24752)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(204.998047,214.24752), new Phaser.Math.Vector2(207.421224,216.067111), new Phaser.Math.Vector2(211.93045,215.823982), 
new Phaser.Math.Vector2(218.525726,213.518134)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(218.525726,213.518134), new Phaser.Math.Vector2(226.995227,210.101576), new Phaser.Math.Vector2(236.410701,205.199157), 
new Phaser.Math.Vector2(244.884124,203.126956)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(244.884124,203.126956), new Phaser.Math.Vector2(259.170257,199.633238), new Phaser.Math.Vector2(258.560882,184.574221), 
new Phaser.Math.Vector2(252.338226,180.189456)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(252.338226,180.189456), new Phaser.Math.Vector2(246.11557,175.80469), new Phaser.Math.Vector2(195.592132,120.718753), 
new Phaser.Math.Vector2(180.588226,99.0312525)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(180.588226,99.0312525), new Phaser.Math.Vector2(165.58432,77.3437525), new Phaser.Math.Vector2(161.125335,70.7187525), 
new Phaser.Math.Vector2(141.222992,63.8339869)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(141.222992,63.8339869), new Phaser.Math.Vector2(131.624942,60.5137589), new Phaser.Math.Vector2(120.030723,53.4566599), 
new Phaser.Math.Vector2(93,40.1015625)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(93,40.1015625), new Phaser.Math.Vector2(87.1689453,37.9414063), new Phaser.Math.Vector2(68.75,23.7773438), new 
Phaser.Math.Vector2(68.75,37.9414063)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(68.75,37.9414063), new Phaser.Math.Vector2(68.75,52.1054688), new Phaser.Math.Vector2(85.796875,59.7548828), new 
Phaser.Math.Vector2(93,61.8339869)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(93,61.8339869), new Phaser.Math.Vector2(100.203125,63.913091), new Phaser.Math.Vector2(68.9207132,53.7952365), new 
Phaser.Math.Vector2(69.8094316,62.8339869)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(69.8094316,62.8339869), new Phaser.Math.Vector2(71,74.9427154), new Phaser.Math.Vector2(87.2988281,78.0244141), new 
Phaser.Math.Vector2(94,81.1523437)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(94,81.1523437), new Phaser.Math.Vector2(100.701172,84.2802734), new Phaser.Math.Vector2(72.8730469,74.576464), new 
Phaser.Math.Vector2(72.8730469,85.6621094)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(72.8730469,85.6621094), new Phaser.Math.Vector2(72.8730469,96.7477548), new Phaser.Math.Vector2(88.9951172,99.0312525), 
new Phaser.Math.Vector2(95.2539062,102)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(95.2539062,102), new Phaser.Math.Vector2(101.512695,104.968747), new Phaser.Math.Vector2(81.3701172,102.627051), new 
Phaser.Math.Vector2(84.2695313,109.523437)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(84.2695313,109.523437), new Phaser.Math.Vector2(87.1689453,116.419824), new Phaser.Math.Vector2(95.2539062,116.419824), 
new Phaser.Math.Vector2(102.255794,118)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(102.255794,118), new Phaser.Math.Vector2(103.937204,118.379458), new Phaser.Math.Vector2(91.3251133,116.550781), new 
Phaser.Math.Vector2(93,123.775391)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(93,123.775391), new Phaser.Math.Vector2(94.6748867,131), new Phaser.Math.Vector2(107,131), new 
Phaser.Math.Vector2(113.277344,132)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(113.277344,132), new Phaser.Math.Vector2(119.554688,133), new Phaser.Math.Vector2(102.255794,129.606351), new 
Phaser.Math.Vector2(103.789062,137.706055)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(103.789062,137.706055), new Phaser.Math.Vector2(105.322331,145.805758), new Phaser.Math.Vector2(120,144), new 
Phaser.Math.Vector2(123.621094,144)));
  path.closePath();
  return scene.add.curve(69.75, 215.24752, path, 0x844cc5);
}

function tail(scene) {
  let path = scene.add.path();
  path.moveTo(95.3678095,257);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(95.3678095,257), new Phaser.Math.Vector2(81.4107783,261.160156), new Phaser.Math.Vector2(72.891247,263.737019), new 
Phaser.Math.Vector2(64.0572626,268.756205)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(64.0572626,268.756205), new Phaser.Math.Vector2(55.2232783,273.775391), new Phaser.Math.Vector2(44.5878906,273.485352), 
new Phaser.Math.Vector2(32,279.791992)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(32,279.791992), new Phaser.Math.Vector2(19.4121094,286.098633), new Phaser.Math.Vector2(9.09827825,298.81543), new 
Phaser.Math.Vector2(5.688122,306.040039)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(5.688122,306.040039), new Phaser.Math.Vector2(2.27796575,313.264648), new Phaser.Math.Vector2(0.015625,318.033203), new 
Phaser.Math.Vector2(0.015625,331.515625)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(0.015625,331.515625), new Phaser.Math.Vector2(0.015625,344.998047), new Phaser.Math.Vector2(-1.54296875,306.040039), 
new Phaser.Math.Vector2(33.0650751,287.804688)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(33.0650751,287.804688), new Phaser.Math.Vector2(28.3564453,300.894531), new Phaser.Math.Vector2(16.6572266,300.894531), 
new Phaser.Math.Vector2(10.4599609,318.150391)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(10.4599609,318.150391), new Phaser.Math.Vector2(4.26269531,335.40625), new Phaser.Math.Vector2(2.60023138,352.587891), 
new Phaser.Math.Vector2(5.688122,358.167969)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(5.688122,358.167969), new Phaser.Math.Vector2(8.77601263,363.748047), new Phaser.Math.Vector2(0.852184503,340.472656), 
new Phaser.Math.Vector2(26.9205439,309.417969)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(26.9205439,309.417969), new Phaser.Math.Vector2(21.7174189,322.138672), new Phaser.Math.Vector2(14.8775751,330.832031), 
new Phaser.Math.Vector2(11.8853876,350.580078)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(11.8853876,350.580078), new Phaser.Math.Vector2(8.89320013,370.328125), new Phaser.Math.Vector2(15.5094111,385.557837), 
new Phaser.Math.Vector2(24.2587891,396)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(24.2587891,396), new Phaser.Math.Vector2(33.0081671,406.442163), new Phaser.Math.Vector2(7.25648138,369.507703), new 
Phaser.Math.Vector2(20.1607783,346.449219)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(20.1607783,346.449219), new Phaser.Math.Vector2(20.1607783,365.339844), new Phaser.Math.Vector2(25.3781971,370.60498), 
new Phaser.Math.Vector2(26.9205439,375.753906)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(26.9205439,375.753906), new Phaser.Math.Vector2(28.4628906,380.902832), new Phaser.Math.Vector2(38.563433,392.400879), 
new Phaser.Math.Vector2(43.3736689,392.400879)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(43.3736689,392.400879), new Phaser.Math.Vector2(48.1839048,392.400879), new Phaser.Math.Vector2(10.4322626,367.640625), 
new Phaser.Math.Vector2(40.2701533,321.759766)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(40.2701533,321.759766), new Phaser.Math.Vector2(52.6076292,300.136719), new Phaser.Math.Vector2(61.3745563,290.636719), 
new Phaser.Math.Vector2(66.5709345,293.259766)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(66.5709345,293.259766), new Phaser.Math.Vector2(51.1060908,313.16276), new Phaser.Math.Vector2(40.8775751,328.358073), 
new Phaser.Math.Vector2(35.8853876,338.845703)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(35.8853876,338.845703), new Phaser.Math.Vector2(28.3971064,354.577148), new Phaser.Math.Vector2(40.8717158,381.679688), 
new Phaser.Math.Vector2(43.3736689,381.679688)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(43.3736689,381.679688), new Phaser.Math.Vector2(45.875622,381.679688), new Phaser.Math.Vector2(29.7115595,357.966797), 
new Phaser.Math.Vector2(51.9322626,331.515625)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(51.9322626,331.515625), new Phaser.Math.Vector2(66.7460647,313.88151), new Phaser.Math.Vector2(77.0650751,297.183594), 
new Phaser.Math.Vector2(82.8892939,281.421875)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(82.8892939,281.421875), new Phaser.Math.Vector2(84.1236689,293.021159), new Phaser.Math.Vector2(77.8463251,307.447347), 
new Phaser.Math.Vector2(64.0572626,324.700439)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(64.0572626,324.700439), new Phaser.Math.Vector2(43.3736689,350.580078), new Phaser.Math.Vector2(57.5103876,374.699219), 
new Phaser.Math.Vector2(57.5103876,366.441406)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(57.5103876,366.441406), new Phaser.Math.Vector2(57.5103876,358.183594), new Phaser.Math.Vector2(54.4478876,350.095703), 
new Phaser.Math.Vector2(64.0572626,335.927734)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(64.0572626,335.927734), new Phaser.Math.Vector2(73.6666376,321.759766), new Phaser.Math.Vector2(91.406872,301.782858), 
new Phaser.Math.Vector2(91.406872,285.269531)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(91.406872,285.269531), new Phaser.Math.Vector2(91.406872,274.260647), new Phaser.Math.Vector2(92.7271845,267.536037), 
new Phaser.Math.Vector2(95.3678095,265.095703)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(95.3678095,265.095703), new Phaser.Math.Vector2(95.3678095,262.375651), new Phaser.Math.Vector2(95.3678095,259.677083), 
new Phaser.Math.Vector2(95.3678095,257)));
  path.closePath();
  return scene.add.curve(16.015625, 424.0, path, 0xa7f66c);
}

function hair(scene) {
  let path = scene.add.path();
  path.moveTo(320.271351,39.9567164);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(320.271351,39.9567164), new Phaser.Math.Vector2(320.757598,40.3871523), new Phaser.Math.Vector2(321.22285,40.8146408), 
new Phaser.Math.Vector2(321.697268,41.2683599)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(321.697268,41.2683599), new Phaser.Math.Vector2(323.153131,42.6607042), new Phaser.Math.Vector2(324.350044,43.9941193), 
new Phaser.Math.Vector2(325.235646,45.2709111)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(325.235646,45.2709111), new Phaser.Math.Vector2(326.025095,46.4090768), new Phaser.Math.Vector2(326.553685,47.4840843), 
new Phaser.Math.Vector2(326.781576,48.5035167)));
  path.lineTo(326.781576,48.5035167, 327.752363,52.8461507);
  path.lineTo(327.752363,52.8461507, 325.016926,49.3364094);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(325.016926,49.3364094), new Phaser.Math.Vector2(323.567854,47.4771564), new Phaser.Math.Vector2(322.333854,46.56352), 
new Phaser.Math.Vector2(320.599399,45.8389044)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(320.599399,45.8389044), new Phaser.Math.Vector2(320.321173,45.7226682), new Phaser.Math.Vector2(320.06158,45.6217662), 
new Phaser.Math.Vector2(319.601211,45.4482476)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(319.601211,45.4482476), new Phaser.Math.Vector2(316.871926,44.4195465), new Phaser.Math.Vector2(315.601522,43.7258851), 
new Phaser.Math.Vector2(313.723051,41.8881559)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(313.723051,41.8881559), new Phaser.Math.Vector2(311.992656,40.1952915), new Phaser.Math.Vector2(310.808241,38.6311702), 
new Phaser.Math.Vector2(309.98654,37.1254074)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(309.98654,37.1254074), new Phaser.Math.Vector2(309.723427,36.643255), new Phaser.Math.Vector2(309.553977,36.2832606), 
new Phaser.Math.Vector2(309.316965,35.7365031)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(309.316965,35.7365031), new Phaser.Math.Vector2(307.640558,35.8837238), new Phaser.Math.Vector2(306.619793,36.5961788), 
new Phaser.Math.Vector2(306.224757,38.0066677)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(306.224757,38.0066677), new Phaser.Math.Vector2(306.006376,38.7864048), new Phaser.Math.Vector2(305.915973,39.3127829), 
new Phaser.Math.Vector2(305.745043,40.6022461)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(305.745043,40.6022461), new Phaser.Math.Vector2(305.699367,40.9468146), new Phaser.Math.Vector2(305.672092,41.1441499), 
new Phaser.Math.Vector2(305.638966,41.3617917)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(305.638966,41.3617917), new Phaser.Math.Vector2(305.309127,43.5288502), new Phaser.Math.Vector2(304.654638,45.1378348), 
new Phaser.Math.Vector2(302.998027,47.296099)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(302.998027,47.296099), new Phaser.Math.Vector2(300.020302,51.1755372), new Phaser.Math.Vector2(297.070546,54.2138775), 
new Phaser.Math.Vector2(293.408482,56.4473579)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(293.408482,56.4473579), new Phaser.Math.Vector2(279.477571,64.9437733), new Phaser.Math.Vector2(271.187711,66.3455597), 
new Phaser.Math.Vector2(263.060833,64.4619695)));
  path.lineTo(263.060833,64.4619695, 257.975817,63.2834003);
  path.lineTo(257.975817,63.2834003, 263.136375,62.4991443);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(263.136375,62.4991443), new Phaser.Math.Vector2(272.85618,61.0220144), new Phaser.Math.Vector2(284.657634,54.7843735), 
new Phaser.Math.Vector2(290.490693,49.2382757)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(290.490693,49.2382757), new Phaser.Math.Vector2(285.829728,52.3304964), new Phaser.Math.Vector2(279.628755,55.4868677), 
new Phaser.Math.Vector2(275.970366,56.5536336)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(275.970366,56.5536336), new Phaser.Math.Vector2(270.450915,58.1630749), new Phaser.Math.Vector2(265.79216,58.5738006), 
new Phaser.Math.Vector2(259.53352,57.6364303)));
  path.lineTo(259.53352,57.6364303, 254.825176,56.9312511);
  path.lineTo(254.825176,56.9312511, 259.41934,55.6824747);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(259.41934,55.6824747), new Phaser.Math.Vector2(259.829563,55.5709688), new Phaser.Math.Vector2(263.211438,54.7072335), 
new Phaser.Math.Vector2(264.422212,54.3779934)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(264.422212,54.3779934), new Phaser.Math.Vector2(266.832014,53.7227072), new Phaser.Math.Vector2(268.956732,53.0653624), 
new Phaser.Math.Vector2(270.971674,52.3221759)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(270.971674,52.3221759), new Phaser.Math.Vector2(276.606605,50.2438017), new Phaser.Math.Vector2(280.57899,47.7667072), 
new Phaser.Math.Vector2(282.468557,44.8048535)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(282.468557,44.8048535), new Phaser.Math.Vector2(270.144838,50.2809817), new Phaser.Math.Vector2(262.524783,52.4823691), 
new Phaser.Math.Vector2(258.703618,50.841736)));
  path.lineTo(258.703618,50.841736, 256.157631,49.7486061);
  path.lineTo(256.157631,49.7486061, 258.814898,48.9638045);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(258.814898,48.9638045), new Phaser.Math.Vector2(265.720232,46.9243714), new Phaser.Math.Vector2(272.333279,43.3536493), 
new Phaser.Math.Vector2(274.953528,40.4973397)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(274.953528,40.4973397), new Phaser.Math.Vector2(279.390302,35.6608541), new Phaser.Math.Vector2(282.689507,32.8575045), 
new Phaser.Math.Vector2(286.247113,30.7719195)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(286.247113,30.7719195), new Phaser.Math.Vector2(287.422615,30.0828019), new Phaser.Math.Vector2(288.634385,29.4615638), 
new Phaser.Math.Vector2(290.173711,28.7421096)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(290.173711,28.7421096), new Phaser.Math.Vector2(290.697197,28.4974412), new Phaser.Math.Vector2(291.239124,28.2499206), 
new Phaser.Math.Vector2(291.99793,27.9074719)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(291.99793,27.9074719), new Phaser.Math.Vector2(292.213028,27.8103984), new Phaser.Math.Vector2(292.470979,27.6942187), 
new Phaser.Math.Vector2(292.955806,27.4758723)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(292.955806,27.4758723), new Phaser.Math.Vector2(293.350017,27.2982345), new Phaser.Math.Vector2(293.651674,27.1619172), 
new Phaser.Math.Vector2(293.951967,27.0255365)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(293.951967,27.0255365), new Phaser.Math.Vector2(297.564034,25.3850805), new Phaser.Math.Vector2(299.136434,24.9111311), 
new Phaser.Math.Vector2(300.769512,24.9570342)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(300.769512,24.9570342), new Phaser.Math.Vector2(301.058142,24.9651471), new Phaser.Math.Vector2(301.349317,24.988165), 
new Phaser.Math.Vector2(301.718635,25.0287041)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(301.718635,25.0287041), new Phaser.Math.Vector2(301.896877,25.0482694), new Phaser.Math.Vector2(302.5724,25.1294802), 
new Phaser.Math.Vector2(302.717405,25.145993)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(302.717405,25.145993), new Phaser.Math.Vector2(303.768973,25.2657432), new Phaser.Math.Vector2(304.692551,25.3251953), 
new Phaser.Math.Vector2(305.90625,25.3251953)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(305.90625,25.3251953), new Phaser.Math.Vector2(307.032137,25.3251953), new Phaser.Math.Vector2(308.000414,25.6939445), 
new Phaser.Math.Vector2(309.000518,26.4256407)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(309.000518,26.4256407), new Phaser.Math.Vector2(309.346844,26.6790199), new Phaser.Math.Vector2(313.122381,30.2571098), 
new Phaser.Math.Vector2(314.877093,31.4638035)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(314.877093,31.4638035), new Phaser.Math.Vector2(314.930468,31.5004339), new Phaser.Math.Vector2(314.930468,31.5004339), 
new Phaser.Math.Vector2(314.984278,31.5370628)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(314.984278,31.5370628), new Phaser.Math.Vector2(315.744107,32.0532156), new Phaser.Math.Vector2(316.605623,32.5901735), 
new Phaser.Math.Vector2(317.822876,33.3162767)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(317.822876,33.3162767), new Phaser.Math.Vector2(317.796367,33.3004636), new Phaser.Math.Vector2(320.301728,34.7827493), 
new Phaser.Math.Vector2(321.033488,35.226146)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(321.033488,35.226146), new Phaser.Math.Vector2(326.202662,38.3583123), new Phaser.Math.Vector2(329.094123,40.7870815), 
new Phaser.Math.Vector2(330.539322,43.8901785)));
  path.lineTo(330.539322,43.8901785, 332.753534,48.6444851);
  path.lineTo(332.753534,48.6444851, 328.945254,45.0384941);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(328.945254,45.0384941), new Phaser.Math.Vector2(325.846615,42.1044492), new Phaser.Math.Vector2(323.898787,41.0051697), 
new Phaser.Math.Vector2(320.271351,39.9567164)));
  path.closePath();
  return scene.add.curve(270.825176, 92.4619695, path, 0xa7f66c);
}

function mane(scene) {
  let path = scene.add.path();
  path.moveTo(290.47168,18.9388221);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(290.47168,18.9388221), new Phaser.Math.Vector2(287.970703,14.7796424), new Phaser.Math.Vector2(289.941406,11.538777), 
new Phaser.Math.Vector2(283.282227,7.65171273)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(283.282227,7.65171273), new Phaser.Math.Vector2(276.623047,3.76464844), new Phaser.Math.Vector2(267.947266,4.51890023), 
new Phaser.Math.Vector2(263.770508,0.977884601)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(263.770508,0.977884601), new Phaser.Math.Vector2(259.59375,-2.56313102), new 
Phaser.Math.Vector2(265.688477,4.40854866), new Phaser.Math.Vector2(273.378906,7.65171273)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(273.378906,7.65171273), new Phaser.Math.Vector2(278.505859,9.8138221), new Phaser.Math.Vector2(280.22168,12.3288436), 
new Phaser.Math.Vector2(278.526367,15.1967773)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(278.526367,15.1967773), new Phaser.Math.Vector2(273.935222,11.6352958), new Phaser.Math.Vector2(270.210776,9.44258748), 
new Phaser.Math.Vector2(267.353027,8.61865234)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(267.353027,8.61865234), new Phaser.Math.Vector2(258.37207,6.02929687), new Phaser.Math.Vector2(258.37207,6.80810547), 
new Phaser.Math.Vector2(249.126465,4.20507812)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(249.126465,4.20507812), new Phaser.Math.Vector2(258.099609,10.4179687), new Phaser.Math.Vector2(268.148926,12.2513221), 
new Phaser.Math.Vector2(270.913574,17.7124023)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(270.913574,17.7124023), new Phaser.Math.Vector2(273.678223,23.1734826), new Phaser.Math.Vector2(265.96582,16.1074219), 
new Phaser.Math.Vector2(258.37207,13.6585487)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(258.37207,13.6585487), new Phaser.Math.Vector2(254.017169,12.2541567), new Phaser.Math.Vector2(251.261573,11.9434937), 
new Phaser.Math.Vector2(245.282227,14.1074219)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(245.282227,14.1074219), new Phaser.Math.Vector2(241.512973,15.4715163), new Phaser.Math.Vector2(234.28734,18.4619141), 
new Phaser.Math.Vector2(231.110352,18.4619141)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(231.110352,18.4619141), new Phaser.Math.Vector2(238.17041,20.9306641), new Phaser.Math.Vector2(242.576172,18.1893104), 
new Phaser.Math.Vector2(249.126465,17.7124023)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(249.126465,17.7124023), new Phaser.Math.Vector2(255.676758,17.2354943), new Phaser.Math.Vector2(262.766602,25.6674805), 
new Phaser.Math.Vector2(258.37207,23.6279297)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(258.37207,23.6279297), new Phaser.Math.Vector2(253.977539,21.5883789), new Phaser.Math.Vector2(239.549805,23.5708524), 
new Phaser.Math.Vector2(231.110352,28.6478065)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(231.110352,28.6478065), new Phaser.Math.Vector2(222.670898,33.7247605), new Phaser.Math.Vector2(221.600586,38.6616183), 
new Phaser.Math.Vector2(218.021484,40.492533)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(218.021484,40.492533), new Phaser.Math.Vector2(214.442383,42.3234478), new Phaser.Math.Vector2(212.833984,44.3372596), 
new Phaser.Math.Vector2(208.794922,44.3372596)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(208.794922,44.3372596), new Phaser.Math.Vector2(204.755859,44.3372596), new Phaser.Math.Vector2(216.967773,45.6829627), 
new Phaser.Math.Vector2(227.256836,38.1741737)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(227.256836,38.1741737), new Phaser.Math.Vector2(237.545898,30.6653846), new Phaser.Math.Vector2(247.389648,28.6478065), 
new Phaser.Math.Vector2(249.126465,30.1972656)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(249.126465,30.1972656), new Phaser.Math.Vector2(250.07373,32.6489258), new Phaser.Math.Vector2(241.405273,32.0110877), 
new Phaser.Math.Vector2(233.665039,38.1741737)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(233.665039,38.1741737), new Phaser.Math.Vector2(225.924805,44.3372596), new Phaser.Math.Vector2(219.328125,46.5794471), 
new Phaser.Math.Vector2(214.061523,49.139994)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(214.061523,49.139994), new Phaser.Math.Vector2(208.794922,51.7005409), new Phaser.Math.Vector2(200.012695,55.6324223), 
new Phaser.Math.Vector2(197.241211,60.8208008)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(197.241211,60.8208008), new Phaser.Math.Vector2(194.469727,66.0091793), new Phaser.Math.Vector2(189.482422,71.8383789), 
new Phaser.Math.Vector2(182.632324,70.9145508)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(182.632324,70.9145508), new Phaser.Math.Vector2(175.782227,69.9907227), new Phaser.Math.Vector2(188.041504,78.590332), 
new Phaser.Math.Vector2(201.01123,66.6293945)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(201.01123,66.6293945), new Phaser.Math.Vector2(213.980957,54.668457), new Phaser.Math.Vector2(229.131836,53.1180708), 
new Phaser.Math.Vector2(226.453125,55.6337891)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(226.453125,55.6337891), new Phaser.Math.Vector2(223.774414,58.1495073), new Phaser.Math.Vector2(206.619629,65.1196289), 
new Phaser.Math.Vector2(201.01123,74.7910156)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(201.01123,74.7910156), new Phaser.Math.Vector2(195.402832,84.4624023), new Phaser.Math.Vector2(200.246582,93.0732422), 
new Phaser.Math.Vector2(185.522461,95.9628906)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(185.522461,95.9628906), new Phaser.Math.Vector2(192.417643,105.84352), new Phaser.Math.Vector2(202.475586,117.370711), 
new Phaser.Math.Vector2(215.696289,130.544465)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(215.696289,130.544465), new Phaser.Math.Vector2(217.726888,122.377682), new Phaser.Math.Vector2(219.294596,114.908223), 
new Phaser.Math.Vector2(220.399414,108.136088)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(220.399414,108.136088), new Phaser.Math.Vector2(222.056641,97.9778846), new Phaser.Math.Vector2(224.842773,83.2580648), 
new Phaser.Math.Vector2(232.516602,69.2376502)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(232.516602,69.2376502), new Phaser.Math.Vector2(240.19043,55.2172357), new Phaser.Math.Vector2(251.623047,45.4319862), 
new Phaser.Math.Vector2(258.37207,40.492533)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(258.37207,40.492533), new Phaser.Math.Vector2(265.121094,35.5530799), new Phaser.Math.Vector2(274.19043,30.0823768), 
new Phaser.Math.Vector2(282.331055,28.6478065)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(282.331055,28.6478065), new Phaser.Math.Vector2(284.694336,22.139994), new Phaser.Math.Vector2(287.509766,22.139994), 
new Phaser.Math.Vector2(290.47168,18.9388221)));
  path.closePath();
  return scene.add.curve(198.632324, 158.544465, path, 0xa7f66c);
}

function eye(scene) {
  let path = scene.add.path();
  path.moveTo(9.66992188,1.91015625);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(9.66992188,1.91015625), new Phaser.Math.Vector2(12.7333984,3.26855469), new Phaser.Math.Vector2(12.9248047,4.14801082), 
new Phaser.Math.Vector2(12.9248047,5.52929688)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(12.9248047,5.52929688), new Phaser.Math.Vector2(10.9423828,7.77587891), new Phaser.Math.Vector2(7.23876953,8.29711914), 
new Phaser.Math.Vector2(4.34326172,6.18188477)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(4.34326172,6.18188477), new Phaser.Math.Vector2(2.64352983,4.94019193), new 
Phaser.Math.Vector2(-1.92471259,0.860839844), new Phaser.Math.Vector2(1.02001953,0.860839844)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(1.02001953,0.860839844), new Phaser.Math.Vector2(3.30029297,0.860839844), new 
Phaser.Math.Vector2(8.20121328,1.25890548), new Phaser.Math.Vector2(9.66992188,1.91015625)));
  path.closePath();
  return scene.add.curve(316.02001953, 90.18188477, path, 0x00000);
}

function nostril(scene) {
  let path = scene.add.path();
  path.moveTo(33.013048,41.6815302);
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(33.013048,41.6815302), new Phaser.Math.Vector2(34.7986926,41.6815302), new Phaser.Math.Vector2(34.0974121,40.8114682), 
new Phaser.Math.Vector2(34.0974121,38.3407651)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(34.0974121,38.3407651), new Phaser.Math.Vector2(34.0974121,35.870062), new Phaser.Math.Vector2(33.8475207,33.7826044), 
new Phaser.Math.Vector2(33.013048,35.9569208)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(33.013048,35.9569208), new Phaser.Math.Vector2(32.6585311,36.8806561), new Phaser.Math.Vector2(31.8677803,37.3209338), 
new Phaser.Math.Vector2(31.6899414,38.3636255)));
  path.add(new Phaser.Curves.CubicBezier(new Phaser.Math.Vector2(31.6899414,38.3636255), new Phaser.Math.Vector2(31.4491777,39.7752532), new Phaser.Math.Vector2(31.9860157,41.6815302), 
new Phaser.Math.Vector2(33.013048,41.6815302)));
  path.closePath();
  return scene.add.curve(346.6899414, 125.6815302, path, 0x000000);
}


