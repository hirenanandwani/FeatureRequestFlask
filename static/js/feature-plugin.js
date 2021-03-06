   $(document).ready(function(){  
              
  
                ko.validation.init({  
      
                    registerExtenders: true,  
                    messagesOnModified: true,  
                    insertMessages: true,  
                    parseInputAttributes: true,  
                    errorClass:'errorStyle',  
                    messageTemplate: null  
      
                }, true);  


		ko.bindingHandlers.numeric = {
    			init: function (element, valueAccessor) {
        			$(element).on("keydown", function (event) {
            				// Allow: backspace, delete, tab, escape, and enter
            				if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
                				// Allow: Ctrl+A
                				(event.keyCode == 65 && event.ctrlKey === true) ||
                				// Allow: . ,
                				(event.keyCode == 188 || event.keyCode == 190 || event.keyCode == 110) ||
                				// Allow: home, end, left, right
                				(event.keyCode >= 35 && event.keyCode <= 39)) {
                				// let it happen, don't do anything
                				return;
            				}
            				else {
                				// Ensur	e that it is a number and stop the keypress
                				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105)) 				{
							alert("Please enter number only");
                    					event.preventDefault();
                				}
            				}
        			});
    			}
		};


      
    
                var viewModel ={  
      
                    //var self = this;  
      
                    Title: ko.observable().extend({ required: true, minLength: 4, maxLength:30}),  
		    Description: ko.observable().extend({required : true}),
	            Priority: ko.observable().extend({ required: true }),
                    ClientList: ko.observableArray(['Client A','Client B','Client C']),  
                    Client: ko.observable().extend({ required: true}),  
	            ProductAreaList: ko.observableArray(['Policies','Billing','Claim']),  
                    Product: ko.observable().extend({ required: true}), 		  
		    TargetDate: ko.observable().extend({required: true}),
                    Priority: ko.observable().extend({ required: true }),  
             

                    submit : function(){  
                        $('div.alert-success').hide();  
                        $('div.alert-danger').hide();  
                        if(viewModel.errors().length === 0){  
                            $('div.alert-success').show();  
			    $('div.alert-success').delay(6000).fadeOut('slow');
                        }else{  
                   	    
                            $('div.alert-danger').show();  
                        }  
                          
                    }
                      
      
                };  
      
                viewModel.errors = ko.validation.group(viewModel);  
                ko.applyBindings(viewModel);  
		
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";

		$('.date-picker').datepicker({


                        format: "yy-mm-dd",
                        container, container,
                        autoclose: true,
                        orientation: "top-right",
                        todayHighlight: true

                });

		$('#save').click(function(){
			
			var result = ko.validation.group(viewModel, {deep: true});
			if (result().length >  0) 
                        {
                                alert("Please fix all errors before preceding");
                                result.showAllMessages(true);
				$('#calendar').css('margin-bottom','33px');

                                return false;
                        }


			$.ajax({
            			url: '/regions',
            			async: true,
            			cache: false,
            			type: 'POST',
            			data: ko.toJSON(viewModel),
            			contentType: 'application/json',
            			success: function (result) {
            					alert("Recorded inserted Sucessfully");
						$('#feature-list').html("");
						$('#Clientlist').val('');
						$('#Title').val('');
						$('#Description').val('');
						$('#Priority').val('');
						$('#TargetDate').val('');
						$('#ProductArea').val('');

          				},
					error: function(xhr, status, error) {
						 $('div.alert-success').hide();
						var json = JSON.parse(xhr.responseText);
						alert(json['error']);
						$('div.alert-danger').show();

					}
        		  });


		
		});

		$('#reset').click(function(){

			var result = ko.validation.group(viewModel, {deep: true});
			result.showAllMessages(false);

			$('div.alert-danger').hide(); 
			$('#feature-list').html("");
                        $('#Clientlist').val('');
                        $('#Title').val('');
                        $('#Description').val('');
                        $('#Priority').val('');
                        $('#TargetDate').val('');
                        $('#ProductArea').val('');

		});

		$('#Clientlist').on('change', function() {
			
			$('#feature-list').html('');
			if($('select').val() != '')
			{
				var data = {'client' : this.value}
				$.ajax({
                                	url: '/clientFeatures',
                                	async: true,
                                	cache: false,
                                	type: 'POST',
                                	//data: ko.toJSON(viewModel),
					data: JSON.stringify(data),
					processData: false,
                                	contentType: 'application/json',
                                	success: function(result) {
							
							
							if(result['features'].length != 0)
							{
                                                        	$('#feature-list').show();
                                                        	html = $("<div class='feature-row' style=''>").append("<div class='feature-title'>Title</div><div class='feature-tdate'>									Target Date</div><div class='feature-priority'>Priority</div><div class='um-arrow'><i class='um-faicon-caret-up'></i></div>")
                                                        	$('#feature-list').append(html);
                                                        	result['features'].forEach(function(entry) {
                        
                                                    
                                                                	html = $("<div class='feature-row'>").append("<div class='title'>"+entry.Title+"</div><div class='tdate'>"+entry										.TargetDate+"</div><div class='priority'>"+entry.Priority+"</div>");
                                                                	$("#feature-list").append(html);                                                							       $("#label_prio").css({"margin-top":"10px"});

                                                        	});

							}
							else
							{

								$('#feature-list').show();
								$('#feature-list').append('<div class="no-feature">'+data["client"]+' do not have any feature entry in database</div><div class="um-arrow"><i class="um-faicon-caret-up"></i></div>');

							}

                                        	}
                        	});
				
			}
		});
		
      
      
     });    
      
