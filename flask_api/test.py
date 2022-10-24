# import Point, Polygon
from sympy import Point, Polygon
  
# creating points using Point()
p1, p2, p3, p4 = map(Point, [(0, 0), (1, 0), (5, 1), (0, 1)])
p5, p6, p7 = map(Point, [(3, 2), (1, -1), (0, 2)])
  
# creating polygons using Polygon()
poly1 = Polygon(p1, p2, p3, p4)
poly2 = Polygon(p5, p6, p7)
  
# using intersection()
isIntersection = poly1.intersection(poly2)
  
print(isIntersection)