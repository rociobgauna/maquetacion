let banners = $('banners')

    
function toggleBanner(){
    $('#punto1').click(function(){
        $('#banner1').toggle()
    })
    $('#punto2').click(function(){
        $('#banner2').toggle()
    })
    $('#punto3').click(function(){
        $('#banner3').toggle()
    })
}

banners.click(function(){
    toggleBanner();
})

