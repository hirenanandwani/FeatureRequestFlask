   $(document).ready(function(){  
              
                
      
                ko.validation.init({  
      
                    registerExtenders: true,  
                    messagesOnModified: true,  
                    insertMessages: true,  
                    parseInputAttributes: true,  
                    errorClass:'errorStyle',  
                    messageTemplate: null  
      
                }, true);  
      
    
                var viewModel ={  
      
                    //var self = this;  
      
                    Title: ko.observable().extend({ required: true, minLength: 2, maxLength:17}),  
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
                            //alert('Thank you');  
                            $('div.alert-success').show();  
                        }else{  
                            //alert('Please check your submission');  
			    
                            $('div.alert-danger').show();  
                        }  
                          
                    }
                      
      
                };  
      
               //Catch errors  
                viewModel.errors = ko.validation.group(viewModel);  
                ko.applyBindings(viewModel);  
		
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";

		$('.date-picker').datepicker({


                        format: "mm-dd-yy",
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
					error: function(response) {
						 $('div.alert-success').hide();
						//$('div.alert-danger').html(result['error']);
						//alert(JSON.stringify(response[0]));
						//alert($.parseJSON(response).msg);
						alert("Priority Should be Greater tha Zero");
						$('div.alert-danger').show();

					}
        		  });


			alert("Button Clicked");
		
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
  				alert(this.value);
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
							
							
							//alert("Hello");
							if(result['features'].length != 0)
							{
								alert("Hello");
								alert(JSON.stringify(result['features'][0].Title));
                                                        	$('#feature-list').show();
                                                        	html = $("<div class='feature-row' style=''>").append("<div class='feature-title'>Title</div><div class='feature-tdate'>									Target Date</div><div class='feature-priority'>Priority</div><div class='um-arrow'><i class='um-faicon-caret-up'></i></div>")
                                                        	$('#feature-list').append(html);
                                                        	result['features'].forEach(function(entry) {
                        
                                                                	alert(entry.Title);
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
      
