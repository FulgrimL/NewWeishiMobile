       var isPhone = function() {
                            var flag = false;
                            var userAgentInfo = navigator.userAgent;
                            var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
                            for (var i = 0; i < Agents.length; i++) {
                                if (userAgentInfo.indexOf(Agents[i]) > 0) {
                                    flag = true;
                                    break;
                                }
                            }
                            if (flag) {
                            	$(".maskcontent").css("height","100%");
                            }
                            else if (!flag) {
                                $(".img1").css("height","365px");
                                $(".fixnav").css("width","750px");
                                $(".willesPlay").css("width","750px");
                                console.log("111");
                            };
                        };
                        isPhone();
                        
                        
                        
                        


