import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:8080/api/product/${id}`);
        setProduct(response.data);
        console.log(response.data);
        setTimeout(() => setIsLoading(false), 800); // Add slight delay for animation
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // SVG Components
  const PulseDot = () => (
    <div style={{
      position: "absolute",
      top: "20px",
      right: "20px",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#4CAF50",
      boxShadow: "0 0 0 rgba(76, 175, 80, 0.4)",
      animation: "pulse 2s infinite"
    }}></div>
  );

  const WaveSVG = () => (
    <div style={{ 
      position: "absolute", 
      bottom: "0", 
      left: "0", 
      width: "100%", 
      height: "120px", 
      overflow: "hidden",
      zIndex: "-1"
    }}>
      <svg 
        viewBox="0 0 1440 320" 
        style={{ 
          position: "absolute", 
          bottom: "0", 
          left: "0" 
        }}
      >
        <path 
          fill="#4a6bff" 
          fillOpacity="0.1" 
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{ animation: "wave 15s linear infinite" }}
        ></path>
        <path 
          fill="#4a6bff" 
          fillOpacity="0.2" 
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,176C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          style={{ animation: "wave 10s linear infinite" }}
        ></path>
      </svg>
    </div>
  );

  const CircleDecoration = ({ top, left, size, delay, color }) => (
    <div style={{
      position: "absolute",
      top: top,
      left: left,
      width: size,
      height: size,
      borderRadius: "50%",
      backgroundColor: color,
      opacity: "0.1",
      animation: `float 6s ease-in-out infinite ${delay}s`
    }}></div>
  );

  if (isLoading) {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          position: "relative",
          marginBottom: "20px"
        }}>
          <div style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            border: "4px solid transparent",
            borderTopColor: "#4a6bff",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }}></div>
          <div style={{
            position: "absolute",
            width: "70%",
            height: "70%",
            top: "15%",
            left: "15%",
            border: "4px solid transparent",
            borderTopColor: "#45caff",
            borderRadius: "50%",
            animation: "spin 1.5s linear infinite reverse"
          }}></div>
        </div>
        <h2 style={{ 
          fontWeight: "600", 
          color: "#333",
          animation: "fadeIn 1s ease-in-out"
        }}>
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <>
      <div style={{
        maxWidth: "1200px",
        margin: "80px auto 40px",
        padding: "30px",
        position: "relative",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
        background: "white",
        overflow: "hidden",
        animation: "fadeIn 0.8s ease-out"
      }}>
        {/* Decorative elements */}
        <CircleDecoration top="5%" left="10%" size="100px" delay={0} color="#4a6bff" />
        <CircleDecoration top="70%" left="5%" size="150px" delay={0.5} color="#45caff" />
        <CircleDecoration top="20%" left="85%" size="120px" delay={1} color="#ff6b6b" />
        <PulseDot />
        <WaveSVG />

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          position: "relative",
          zIndex: "1"
        }}>
          {/* Header Section */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            position: "relative",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(0,0,0,0.05)"
          }}>
            <div style={{
              display: "inline-block",
              padding: "6px 12px",
              backgroundColor: "rgba(74, 107, 255, 0.1)",
              borderRadius: "20px",
              color: "#4a6bff",
              fontWeight: "600",
              fontSize: "14px",
              marginBottom: "15px",
              animation: "slideInRight 0.8s ease-out"
            }}>
              {product.category}
            </div>
            
            <h1 style={{
              fontSize: "36px",
              fontWeight: "800",
              margin: "0 0 10px 0",
              background: "linear-gradient(45deg, #333, #666)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "slideInRight 0.8s ease-out 0.1s both"
            }}>
              {product.name}
            </h1>
            
            <h5 style={{
              fontSize: "18px",
              color: "#666",
              margin: "0 0 15px 0",
              fontWeight: "500",
              animation: "slideInRight 0.8s ease-out 0.2s both"
            }}>
              {product.brand}
            </h5>
            
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              animation: "slideInRight 0.8s ease-out 0.3s both"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 12px",
                backgroundColor: "rgba(0,0,0,0.05)",
                borderRadius: "20px",
                fontSize: "14px"
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "5px" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#666"/>
                </svg>
                {product.country.toUpperCase()}
              </div>
              
              <div style={{
                display: "flex",
                alignItems: "center",
                padding: "5px 12px",
                backgroundColor: "rgba(0,0,0,0.05)",
                borderRadius: "20px",
                fontSize: "14px"
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ marginRight: "5px" }}>
                  <path d="M19 4H18V2H16V4H8V2H6V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 20H5V10H19V20ZM19 8H5V6H19V8Z" fill="#666"/>
                </svg>
                Est. {product.establish}
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div style={{
            display: "flex",
            borderBottom: "1px solid rgba(0,0,0,0.05)",
            marginBottom: "20px",
            animation: "fadeIn 0.8s ease-out 0.4s both"
          }}>
            <button 
              onClick={() => setActiveTab("description")}
              style={{
                padding: "12px 20px",
                backgroundColor: activeTab === "description" ? "rgba(74, 107, 255, 0.1)" : "transparent",
                border: "none",
                borderBottom: activeTab === "description" ? "2px solid #4a6bff" : "2px solid transparent",
                color: activeTab === "description" ? "#4a6bff" : "#666",
                fontWeight: activeTab === "description" ? "600" : "400",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "16px"
              }}
            >
              Description
            </button>
            <button 
              onClick={() => setActiveTab("details")}
              style={{
                padding: "12px 20px",
                backgroundColor: activeTab === "details" ? "rgba(74, 107, 255, 0.1)" : "transparent",
                border: "none",
                borderBottom: activeTab === "details" ? "2px solid #4a6bff" : "2px solid transparent",
                color: activeTab === "details" ? "#4a6bff" : "#666",
                fontWeight: activeTab === "details" ? "600" : "400",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "16px"
              }}
            >
              Details
            </button>
            <button 
              onClick={() => setActiveTab("location")}
              style={{
                padding: "12px 20px",
                backgroundColor: activeTab === "location" ? "rgba(74, 107, 255, 0.1)" : "transparent",
                border: "none",
                borderBottom: activeTab === "location" ? "2px solid #4a6bff" : "2px solid transparent",
                color: activeTab === "location" ? "#4a6bff" : "#666",
                fontWeight: activeTab === "location" ? "600" : "400",
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontSize: "16px"
              }}
            >
              Location
            </button>
          </div>

          {/* Tab Content */}
          <div style={{ animation: "fadeIn 0.8s ease-out 0.5s both" }}>
            {activeTab === "description" && (
              <div style={{ lineHeight: "1.8", color: "#444", fontSize: "16px" }}>
                <p>{product.desc}</p>
              </div>
            )}
            
            {activeTab === "details" && (
              <div>
                <div style={{ 
                  display: "grid", 
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "20px",
                  marginBottom: "20px"
                }}>
                  <div style={{ 
                    padding: "20px", 
                    borderRadius: "10px", 
                    backgroundColor: "rgba(74, 107, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <div style={{ fontSize: "14px", color: "#666" }}>Price Estimate</div>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#4a6bff" }}>${product.price}</div>
                  </div>
                  
                  <div style={{ 
                    padding: "20px", 
                    borderRadius: "10px", 
                    backgroundColor: "rgba(74, 107, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <div style={{ fontSize: "14px", color: "#666" }}>Established</div>
                    <div style={{ fontSize: "24px", fontWeight: "700", color: "#4a6bff" }}>{product.establish}</div>
                  </div>
                  
                  <div style={{ 
                    padding: "20px", 
                    borderRadius: "10px", 
                    backgroundColor: "rgba(74, 107, 255, 0.05)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    <div style={{ fontSize: "14px", color: "#666" }}>Contact</div>
                    <div style={{ fontSize: "20px", fontWeight: "700", color: "#4a6bff" }}>{product.contact}</div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === "location" && (
              <div>
                <div style={{ marginBottom: "20px" }}>
                  <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#333" }}>Location</h3>
                  <p style={{ color: "#666" }}>{product.country}</p>
                </div>
                
                {product.map && (
                  <div>
                    <a 
                      href={product.map} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        backgroundColor: "#4a6bff",
                        color: "white",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontWeight: "600",
                        boxShadow: "0 4px 15px rgba(74, 107, 255, 0.3)",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(74, 107, 255, 0.4)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(74, 107, 255, 0.3)";
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
                      </svg>
                      View on Map
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Image Section */}
          {product.imageUrl && (
            <div style={{ 
              marginTop: "30px",
              position: "relative",
              borderRadius: "15px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              animation: "fadeIn 0.8s ease-out 0.6s both"
            }}>
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                style={{ 
                  width: "100%", 
                  height: "auto", 
                  display: "block",
                  transition: "transform 0.5s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <div style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                padding: "30px 20px 20px",
                color: "white"
              }}>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>{product.name}</h3>
                <p style={{ margin: "5px 0 0", opacity: "0.8" }}>{product.brand}</p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "20px",
            marginTop: "30px",
            animation: "fadeIn 0.8s ease-out 0.7s both"
          }}>
            <button style={{
              padding: "14px 30px",
              backgroundColor: "#4a6bff",
              color: "white",
              border: "none",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: "0 4px 15px rgba(74, 107, 255, 0.3)",
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(74, 107, 255, 0.4)";
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(74, 107, 255, 0.3)";
            }}>
              
              <a 
                      href={product.map} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "12px 24px",
                        backgroundColor: "#4a6bff",
                        color: "white",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontWeight: "600",
                        boxShadow: "0 4px 15px rgba(74, 107, 255, 0.3)",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(74, 107, 255, 0.4)";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(74, 107, 255, 0.3)";
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="white"/>
                      </svg>
                      View on Map
                    </a>
            </button>
            
            <button style={{
              padding: "14px 30px",
              backgroundColor: "transparent",
              color: "#4a6bff",
              border: "2px solid #4a6bff",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s ease"
            }} onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#4a6bff";
              e.currentTarget.style.color = "white";
            }} onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#4a6bff";
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ transition: "all 0.3s ease" }}>
                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" fill="currentColor"/>
              </svg>
              {product.contact}
            </button>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideInRight {
            from { 
              opacity: 0;
              transform: translateX(-30px);
            }
            to { 
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
            }
            70% {
              box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
            }
          }
          
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0) rotate(0deg); }
          }
          
          @keyframes wave {
            0% { transform: translateX(0); }
            50% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </>
  );
};

export default Product;