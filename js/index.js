const linkClicked = (event) => {
    console.log("link worked!");
    event.preventDefault();
    console.log(event.target);
    document.querySelector(event.target);
}

$("#projectTitle").click(function() {
    $("#projectSection").slideUp();
    if ( $( "#projectSection" ).first().is( ":hidden" ) ) {
        $( "#projectSection" ).show( "slow" );
      } 
      if ( $( "#projectSection" ).first().is( ":hidden" ) ) {
        $( "#projectSection" ).show( "slow" );
      } 
}
)

$("#aboutTitle").click(function() {
    $("#aboutSection").slideUp();
    if ( $( "#aboutSection" ).first().is( ":hidden" ) ) {
        $( "#aboutSection" ).show( "slow" );
      } 
      if ( $( "#aboutSection" ).first().is( ":hidden" ) ) {
        $( "#aboutSection" ).show( "slow" );
      } 
}
)

$("#contactTitle").click(function() {
    $("#contactSection").slideUp();
    if ( $( "#contactSection" ).first().is( ":hidden" ) ) {
        $( "#contactSection" ).show( "slow" );
      } 
      if ( $( "#contactSection" ).first().is( ":hidden" ) ) {
        $( "#contactSection" ).show( "slow" );
      } 
}
)

// $("#about").click(function() {
//     $(this).slideUp();
//     if ( $( "#projects" ).first().is( ":hidden" ) ) {
//         $( "#projects" ).show( "slow" );
//       } 
//       if ( $( "#contact" ).first().is( ":hidden" ) ) {
//         $( "#contact" ).show( "slow" );
//       } 
// }
// )


// $("#contact").click(function() {
//     $(this).slideUp();
//     if ( $( "#projects" ).first().is( ":hidden" ) ) {
//         $( "#projects" ).show( "slow" );
//       } 
//       if ( $( "#about" ).first().is( ":hidden" ) ) {
//         $( "#about" ).show( "slow" );
//       } 
// }
// )

