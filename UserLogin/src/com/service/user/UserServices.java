package com.service.user;
import javax.ws.rs.*;

@Path("/user/service")
public class UserServices {
	@POST
	@Path("/create")
	public String createUser(String data)	{
		System.out.println(data);
		return data;
	}
}
