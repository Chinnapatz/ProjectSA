package controller
import (
	"net/http"
	"github.com/Chinnapatz/ProjectSA/entity"
	"github.com/gin-gonic/gin"
)

func CreateFollow(c *gin.Context) {
	var follow entity.Follow
	var cartoon entity.Cartoon
	var member entity.Follow
	
	if err := c.ShouldBindJSON(&follow); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if tx:= entity.DB().Where("id=?",cartoon.ID).Find(&cartoon);tx.RowsAffected==0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cartoon not found"})
		return
	}
	if tx:= entity.DB().Where("id=?",member.ID).Find(&member);tx.RowsAffected==0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "member not found"})
		return
	}
	f:=entity.Follow{
		CartoonID: &cartoon.ID,
		MemberID: &member.ID,
	}
	if err := entity.DB().Create(&f).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": member})
}

// GET bookshelf/follow
func ListFollow(c *gin.Context) {
	var follow []entity.Follow
	if err := entity.DB().Preload("Member").Preload("Cartoon").Raw("SELECT * FROM follows").Find(&follow).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": follow})
}
// GET bookshelf/follow/:id
func GetCartoonFollowByID(c *gin.Context) {
	var cartoon[]entity.Cartoon
	idMember := c.Param("ID")
	if err := entity.DB().Preload("Follow").Raw("SELECT * FROM cartoons WHERE id = (SELECT cartoon_id FROM follows WHERE member_id = ?)", idMember).Find(&cartoon).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": cartoon})
}



