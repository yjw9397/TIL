import sys

# input()썼을 때 888ms, sys.stdin.readline()썼을 때 120ms
N = int(sys.stdin.readline())

order = {}
for _ in range(N):
    # strip을 안 쓰면 \n이 붙어서 입력됨
    word = sys.stdin.readline().strip()
    
    # key를 단어길이로 했더니 동일 단어길이인 단어들이 중복이라 덮어쓰여짐
    # key를 단어로 하니 중복 단어들도 없어지는 효과!
    order[word] = len(word)

# 딕셔너리를 이용한 정렬
'''
dict(sorted(order.items())) -> order를 key값으로 정렬한 것(알파벳순 정렬)
                              value로 한 번 더 정렬하기 위해 dict 형태로 변경
dict(sorted(~~.items(), key = lambda x: x[1])).keys()
-> value값으로 정렬, 'key ='의 key는 정렬에서의 key
lambda 함수의 x[1]은 value를 의미(x[0]는 key/ (key, value)이므로)
답에 key만 필요하므로 dict형태로 바꾸어 key값만 빼줌
'''
result = dict(sorted(dict(sorted(order.items())).items(), key = lambda x: x[1])).keys()

# sep='\n' 각 원소들을 한 줄씩 출력
print(*result, sep='\n')