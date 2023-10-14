package main

import (
	"github.com/Chinnapatz/ProjectSA/controller"
	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {
	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())

	// User Routes

	r.GET("/members", controller.ListMember)
	r.GET("/member/:ID", controller.GetMember)
	r.GET("/login/:username", controller.GetMemberByUsername)
	r.GET("/cartoon/:ID",controller.GetCartoonByID)
	r.GET("/package", controller.PackageCoin)
	r.GET("/package/:ID/:ID_package", controller.UpdateCoin)
	r.GET("/categories",controller.GetCategories)
	r.GET("/cartoons/:ID",controller.GetCartoon)
	r.POST("/members", controller.CreateMember)
	r.POST("/episodes/:ID",controller.CreateEpisodes)
	r.POST("/cartoons/:ID",controller.CreateSeries)
	r.PATCH("/members", controller.UpdateMember)
	r.DELETE("/members/:id", controller.DeleteMember)

	r.POST("/login", controller.LoginByUsername)
	r.POST("/comments",controller.CreateComment)
	//new 
	r.GET("/bookshelf/follow",controller.ListFollow)
	r.GET("/bookshelf/history",controller.ListHistory)
	r.GET("/bookshelf/paymentEpisodes",controller.ListPaymentEpisode)

	r.GET("/bookshelf/follow/:ID",controller.GetCartoonFollowByID)
	r.GET("/bookshelf/follow/kuy/:ID",controller.GetCartoonFollow)
	r.GET("/bookshelf/history/:ID",controller.GetCartoonHistoryByID)
	r.GET("/bookshelf/paymentEpisodes/:ID",controller.GetEpisodePaymentEpisodeByID)

	r.POST("/bookshelf/follow",controller.CreateFollow)
	r.POST("/bookshelf/history",controller.CreatePaymentEpisodes)
	r.POST("/bookshelf/paymentEpisodes",controller.CreateHistory)
	// Run the server
	
	r.Run()

}

func CORSMiddleware() gin.HandlerFunc {

	return func(c *gin.Context) {

		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()

	}

}
