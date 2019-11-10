 <script>
                    var resultado=0;
                
                
                    function soma(ff){
                        if(ff.checked == true){
                            resultado+=parseInt(ff.value);
                            }
                            else{
                                resultado-=parseInt(ff.value);
                            }
                            console.log(resultado)
                            document.getElementById("resultado").innerHTML = resultado;
                    }
                </script>